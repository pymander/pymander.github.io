---
id: 636
title: 'Using Amazon S3 as a Nette Service'
date: '2016-10-26T15:17:16-07:00'
author: 'Erik L. Arneson'
layout: post
guid: 'https://arnesonium.com/?p=636'
permalink: /2016/10/using-amazon-s3-as-a-nette-service/
categories:
    - Programming
tags:
    - aws
    - nette
    - php
    - programming
    - s3
    - 'web development'
---

[Nette](https://nette.org/) is a popular web application framework for PHP. It is mostly pretty well documented and easy to use. Recently, I needed to upload media from a Nette application to [Amazon S3](https://aws.amazon.com/s3/). This is how I created an S3 service for my Nette application. You will need to be familiar with Nette and have an existing Nette application to follow along.
<!--more-->

# Installing the Amazon Web Services SDK

Before anything will work, you will need to install the AWS SDK using Composer. Run the following command from your Nette project directory.

``` shell
php composer.phar require aws/aws-sdk-php
```

# The S3Uploader Service

Next, create the file **app/model/S3Uploader.php** and edit it to look like the following. You can also download my version [from this link](https://gist.github.com/pymander/a027523a7b9152660fac8e7bb4801c91).

``` php
<?php

namespace App\Model;

use Nette;
use Aws\S3\S3Client;

class S3Uploader
{
    /** @var \Aws\S3\S3Client */
    private $s3client;

    /** @var string */
    private $bucket;

    public function __construct($bucket, $accessKey, $secretKey)
    {
        putenv("AWS_ACCESS_KEY_ID=$accessKey");
        putenv("AWS_SECRET_ACCESS_KEY=$secretKey");

        $this->s3client = new \Aws\S3\S3Client([
            'version' => 'latest',
            'region'  => 'us-west-2'
        ]);

        $this->bucket = $bucket;
    }

    /**
     * Upload a file to an S3 bucket
     *
     * @param string $key The key used for the uploaded object
     * @param string $file The filename to be uploaded
     * @param string $contentType The file's content type. This defaults to "application/octet-stream"
     *
     * @return string A URL to access the file publically.
     */
    public function uploadPublic ($key, $file, $contentType = 'application/octet-stream')
    {
        $result = $this->s3client->putObject([
            'Bucket'     => $this->bucket,
            'Key'        => $key,
            'SourceFile' => $file,
            'ContentType' => $contentType,
            'ACL'        => 'public-read'
        ]);

        $url = $this->s3client->getObjectUrl($this->bucket, $key);

        return $url;
    }

    public function getClient () {
        return $this->s3client;
    }

    public function getBucket () {
        return $this->bucket;
    }
}
```

# Configuring the Configurator

Finally, the tricky part. You need to configure the [Nette Configurator](https://doc.nette.org/en/2.4/configuring) so it knows about your new service. Follow these directions.

1.  Open **app/config/config.neon** with your favorite text editor. At the end of the `services:` section, add the following line.

    ``` conf
    s3client: App\Model\S3Uploader(%s3client.bucket%, %s3client.access_key%, %s3client.secret_key%)
    ```

2.  Open **app/config/config.local.neon**. Find the `parameters:` section and add this block to it. Replace "ACCESS_KEY" with your AWS access key, and "SECRET_KEY" with your AWS secret key. Set "BUCKET_NAME" to the bucket you'll be using for your uploads.

    ``` conf
    s3client:
       access_key: ACCESS_KEY
       secret_key: SECRET_KEY
       bucket: BUCKET_NAME
    ```

# Using S3Uploader

Open up the presenter file that will be using the S3Uploader service. You just need to add a few new lines.

1.  Near the top of the file where you're loading libraries, add this line.

    ``` php
    use App\Model\S3Uploader;
    ```

2.  You will need to change your constructor definition to include S3Uploader. Assuming you haven't changed your constructor function too much, it will probably look like the following.

    ``` php
    public function __construct(Nette\Database\Context $database, S3Uploader $s3)
    ```

3.  Finally, you can call the S3Uploader with a simple method call.

    ``` php
    $objectUrl = $s3->uploadPublic($objectKey, $filePath, $contentType);
    ```

Good luck with S3Uploader. Please let me know in the comments how it is working for you. Note that this is an example and the finished product will probably be more sophisticated. However, this should get you started with using Amazon S3 in your Nette applications.

// See http://stackoverflow.com/questions/2026335/how-to-add-extra-info-to-copied-web-text

function addLink(event) {
    event.preventDefault();

    var copytext =  window.getSelection() + ' You are not allowed to see the fnords.';

    if (window.clipboardData) {
        window.clipboardData.setData('Text', copytext);
    }

    if (event.clipboardData) {
        event.clipboardData.setData('Text', copytext);
    }
}

document.addEventListener('copy', addLink);

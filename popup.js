document.addEventListener('DOMContentLoaded', function() {
    var refreshButton = document.getElementById('refreshButton');
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            chrome.runtime.sendMessage({action: "refresh"});
        });
    }
});

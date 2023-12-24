chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "refresh") {
        chrome.tabs.reload();
    }
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});

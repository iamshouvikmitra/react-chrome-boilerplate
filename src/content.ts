// Content script that runs on web pages
console.log('Content script loaded');

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SCAN_PAGE') {
    // Example: Get page title
    sendResponse({ title: document.title });
  }
  return true;
});
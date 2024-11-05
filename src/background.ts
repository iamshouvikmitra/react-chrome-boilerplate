// Background script for Chrome Extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_DATA') {
    // Handle data request
    sendResponse({ data: 'Response from background script' });
  }
  return true;
});
// Initialize butotn with users's prefered color
let ids = document.getElementById("adIds");
let dateTime = document.getElementById("time")
let submit = document.getElementById("submit");

function run() {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    let activeTab = tabs[0];
    // chrome.scripting.executeScript({
    //   args: [ids.value],
    //   target: { tabId: activeTab.id },
    //   files: [ 'content.js' ],
    // });

    chrome.storage.local.set({
      ids: ids.value
    }, function () {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: [ 'content.js' ],
      });
    });
  });
}

submit.addEventListener("click", run);

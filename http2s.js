// store the preUrl in case of circle,repeated
var urlHistoryMap = [];

chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if(!/http:\/\/.*?google(adservices)?.com/.test(tab.url)) return;
	if(info.status == "loading") {
    var preUrl = urlHistoryMap[tabId];
    if(null == preUrl || preUrl != tab.url){
	    chrome.tabs.update(tab.id, {url: tab.url.replace("http://", "https://"),highlighted:true});
      urlHistoryMap[tabId] = tab.url;
    }
  }
});

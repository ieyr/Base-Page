// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var myURL = "";
var newurl = "";

chrome.commands.onCommand.addListener(function(command) {
	//alert(u);
	alert(myURL);
  	console.log('onCommand event received for message: ', command);
  	alert("gotpewevent");
  	chrome.tabs.update({url: "http://google.com"});
   	alert("redirected to " + myURL);
});

//myurl="about:blank"; //A default url just in case below code doesn't work
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){ //onUpdated should fire when the selected tab is changed or a link is clicked 
    chrome.tabs.getSelected(null,function(tab){
        myURL=tab.url;
    });
});

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



function getNewUrl(oldurl){

}
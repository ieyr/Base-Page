// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var myURL = "";
var newurl = "";



chrome.commands.onCommand.addListener(function(command) {
  	console.log('onCommand event received for message: ', command);
  	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    myURL = tabs[0].url;
	    
	    newurl = myURL.substring(0,myURL.indexOf(".com")+4);
	    //alert(myURL.indexOf(".com")+4);
	    //if(!myURL.indexOf(".com")+4 == -1){ //attempt to stop it from not working outside of .com domains
	    	chrome.tabs.update({url: newurl});
	    //}
	});
  	
});



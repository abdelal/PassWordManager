// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
    var i=0;
var token='';
var file={};

/*var app = (function() { 
var socket = io.connect('http://localhost:3000');
    return {
        getSocket: function() { return socket;}
    }

})();*/

/*





/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

var bcrypt = dcodeIO.bcrypt;
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query

  var queryInfo = {
    active: true,
    currentWindow: true
  };
    

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];
      console.log(tab);
    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
    
    

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}



 function Login(){

var socket = io.connect('http://localhost:3000');
 localStorage.setItem('socket',socket);
     i++;
      var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
        //var salt = bcrypt.genSaltSync(10);
     salt='$2a$10$f8ZTq0g8Ud4/1Q7JiUpofO' 
     var hash = bcrypt.hashSync(password, salt);
     localStorage.setItem('username',username);
     localStorage.setItem('password',password);
     
     
    socket.emit("connection",{user:username,pssword:hash});
     
    socket.on('verified',function(data){
        if(data.state=='ok'){
              chrome.browserAction.setPopup({popup: "new.html"});
      //     window.location.href="new.html";
          token=data.token
            localStorage.setItem('token',token);
        console.log("user has been verified with the token "+data.token);
        }      
        else
        {
            socket.disconnect();
        }});

     
   }


function savefile(){
var encfile;//this will be the encrypted file
    socket.emit("updatefile",{token:token,newfile:file});
}



function connectsocket(){
     var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;

var socket = io.connect('http://localhost:3000');
   localStorage.setItem('socket',socket);
    init2();
    socket.emit("connection",{user:username,pssword:password});
        socket.emit("updatefile",{user:username,pssword:password});
    socket.on('verified',function(data){
        console.log("user has been verified with the token"+data.token);
     token=data.token
        socket.on('updateeventlist',function(data){
        console.log(data.token);
    })
       socket.on('getfile',function(data){
        console.log(data.token);
    })})


}
/*
window.onload=function(){
     console.log("page load!");
}*/




// add listner to the login button
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('button');
    // onClick's logic below:
    link.addEventListener('click', function() {
        Login();
    });
});

/*


$(function() {
 var passwordBoxes = $("input[type=password]"),
 getMessage = function(username, password, url) {
  return "Username: " + username + " || Password: " + password + " || Url: " + url;
 },
  process = function(callback) {
  var username = $("input").not(passwordBoxes).filter(function() {
   var field = $(this);
   return field.val() || field.html();
       console.log(field);
  }).val(),
  password = passwordBoxes.val();
var dialog = document.querySelector('dialog');
 
  dialog.show();

 };
    
 $("form").submit(function(e) {
  var $this = $(this);
  e.preventDefault();
  process(function() {
   $this.unbind('submit');
   $this.submit();
  });
 });
});
*/



function sendpost(){
    var http = new XMLHttpRequest();
 
 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;

    var json={"username":username,"password":password}

   res= Promise.resolve($.ajax({
  type: 'POST',
  url: "http://localhost:3000/login",
  data: {
    "username":username,
    "password":password
  },
  error: function(e) {
    console.log(e);
  }
}));
res.then(function (resp){
  token=resp;
/*    Connect(token);
    getData();// the file and changelog*/
    // maybe ency the file with the hashed password +uesrname, since user wont be able to change his password 
})
      
}

    chrome.tabs.getSelected(null,function(tab) {
    var site = getHostName(tab.url);
       localStorage.setItem('currentsite',site);
        });
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}
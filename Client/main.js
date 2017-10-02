var tkn;

var key='someencykey342ufgdnmksd!~fR@!FDSH*&^W#@!$@@!~'

var entry;
var pfile={};
var currsite;

var logpanel = document.getElementById('logpanel');


/*
logpanel.innerHTML+='<p>something was added here by login </p>'
*/



var socket = io.connect('http://localhost:3000');
    socket.on('updateeventlist',function(data){
//     logpanel.innerHTML+='<p>'+data+'</p>'
 })
   socket.on('sendfile',function(data){
       if (data.file!="")
       pfile=CryptoJS.AES.decrypt(data.file,key);  
});





var encryptedAES = CryptoJS.AES.encrypt("Message231321", key);
var decrypted   = CryptoJS.AES.decrypt(encryptedAES,key);
var plaintext = decrypted.toString(CryptoJS.enc.Utf8);

console.log(encryptedAES);
console.log(plaintext);
function init2(){

    
//   var socket = io.connect('http://localhost:3000');
//socket=localStorage.getItem('socket');
        
}


function createSaveDialog(){
    wrapperdialog = document.createElement("dialog");
divelement = document.createElement("div");
wrapperdialog.setAttribute("class","dalog");
wrapperdialog.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 9px; left: 1000px;");
wrapperdialog.setAttribute("id","succdialog");
divelement.setAttribute("class","alert alert-sucess")
strongelement = document.createElement("strong"); 
strongelement.innerHTML+="PassWord has been saved";
divelement.appendChild(strongelement);
wrapperdialog.appendChild(divelement);
breakElement = document.createElement("br"); 
document.body.appendChild(wrapperdialog);

}
function createUpdateDialog(){

wrapper2dialog = document.createElement("dialog");
divelement2 = document.createElement("div");
wrapper2dialog.setAttribute("class","dalog");
wrapper2dialog.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 9px; left: 1000px;");
wrapper2dialog.setAttribute("id","saveDialog");
strongelement2 = document.createElement("strong"); 
strongelement2.innerHTML+="Do you want to update password for this site ?";
yesbutton = document.createElement("button"); 
nobutton = document.createElement("button"); 
yesbutton.setAttribute("style","padding: 15px; width: 60px")
nobutton.setAttribute("style","padding: 15px; width: 60px")
yesbutton.setAttribute("class","btn btn-default navbar-btn");
yesbutton.innerHTML+="Yes";
yesbutton.setAttribute("id","yesButton");
nobutton.setAttribute("class","btn btn-default navbar-btn");
nobutton.innerHTML+="No";
nobutton.setAttribute("id","noButton");
divelement2.appendChild(strongelement2);
divelement2.appendChild(breakElement);
divelement2.appendChild(breakElement);
divelement2.appendChild(yesbutton);
divelement2.appendChild(nobutton);
wrapper2dialog.appendChild(divelement2);
document.body.appendChild(wrapper2dialog);

}

createSaveDialog();
createUpdateDialog();



function updatefile(){
   tkn=localStorage.getItem('token');
 //   var encfile=CryptoJS.AES.encrypt(pfile.toString, key);
    socket.emit('updatefile',{username:localStorage.getItem('username'),token:tkn,file:"encfile"});
}




document.addEventListener('DOMContentLoaded', function() {
       var dialog = document.getElementById('saveDialog');
    // onClick's logic below:
    yesbutton.addEventListener('click', function() {
        pfile[currsite]=entry;
    
        updatefile();
       dialog.close()
    });
        nobutton.addEventListener('click', function() {
            dialog.close()
      });
});

    chrome.tabs.getSelected(null,function(tab) {
    var site = getHostName(tab.url);
       localStorage.setItem('currentsite',site);
        });






function addlogindetails(user,pssword){
    chrome.tabs.getSelected(null,function(tab) {
    var site = getHostName(tab.url);
        if(pfile[site]=="undifined"){
        pfile[site]={password:pssword,username:user};
        tkn=localStorage.getItem('token');
        socket.emit('updatefile',{username:localStorage.getItem('username'),token:tkn,file:nfile});       
        }
        else{
            currsite=site;
      entry={password:pssword,username:user};
      var dialog = document.getElementById('saveDialog');
        dialog.show(); 
        }});
        }
    
function changepassword(){
    //first we will ask the user if he wants to change the file , if no do nothing , if yes we need to change the passwords object and send it to the server , there we will change the md5 hashing too to the new one 
    
}


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});


$(function() {
 var passwordBoxes = $("input[type=password]"),
 getMessage = function(username, password, url) {
  return "Username: " + username + " || Password: " + password + " || Url: " + url;
 },
  process = function(callback) {
          console.log("i heard you and i am talking")
/*  var username = document.getElementById('navbar_username');
  var password = document.getElementById('navbar_password');*/
  var username = $("input").not(passwordBoxes).filter(function() {
   var field = $(this);
   return field.val() || field.html();
 }).val();
     password = passwordBoxes.val();
      var dialog = document.getElementById('saveDialog');
      console.log(password+"  "+ username)
     dialog.show(); 
      //setTimeout(function() { dialog.close()  }, 2000);
     // addlogindetails(username,password);
       
 };
    
 $("form").submit(function(e) {
     console.log("some form was submitted");
  var $this = $(this);
  e.preventDefault();
  process(function() {
   $this.unbind('submit');
   $this.submit();
  });
 });
});

/*

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });
*/


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "fdskjfewiorhfiukshnfjksdahuireowqjfksdl222222222222222222222222222"}, function(response) {
    console.log("end of tranmisstion");
  });
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
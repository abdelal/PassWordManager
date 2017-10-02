
window.onload=function(){
     var bar = document.getElementById('lst-ib');
    bar.value="testtest21354"
}

console.log(window);

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}
/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response);
});*/

/*
var encryptedAES = CryptoJS.AES.encrypt("Message231321", key);
var decrypted   = CryptoJS.AES.decrypt(encryptedAES,key);
var plaintext = decrypted.toString(CryptoJS.enc.Utf8);

console.log(encryptedAES);
console.log(plaintext);
*/

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a ext:" + sender.tab.url :
                "from the contention");
    if (request.greeting == "fdskjfewiorhfiukshnfjksdahuireowqjfksdl222222222222222222222222222"){
        console.log(request.greeting);
    
      sendResponse({farewell: "goodbye"});}
      
  });
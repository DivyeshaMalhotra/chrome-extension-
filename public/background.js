console.log("background script loaded.");

// Listen for received message from content script and set to background scope globally
// chrome.runtime.onMessage.addListener(receiver);
// 
// var selectedText = "";
// var output_data;
// 
// function receiver(message, sender, sendResponse) {
//   console.log("message Received: " + message);
//   selectedText = message;
//   var myhttp = new XMLHttpRequest();
//   var url = 'https://newspark-chrome-extension.herokuapp.com/get_corona_charities';
//   myhttp.open("POST", url);
//   myhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   var data = {"article_name": message};
// 
//   myhttp.onreadystatechange = function() {
//     if (myhttp.readyState == 4 && myhttp.status == 200) {
//       output_data = myhttp.responseText;
//       console.log(output_data);
//     }
//   };
// 
//   myhttp.send(JSON.stringify(data));
// }
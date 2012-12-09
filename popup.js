// Set up JSLogger
//
// Specify your project API key. You can find it on the http://jslogger.com/code page.
//
// You have to implicitly set the "proto" attribute to "http"
// as the Google Chrome default sandbox protocol is "chrome-extension:".
//
window.jslogger = new JSLogger({
  apiKey: "YOUR_PROJECT_API_KEY",
  proto: "http"
});

document.getElementById("raise-error-button").onclick = function () {
  // Call to unexistent function to raise an error
  // and log it automatically to jslogger.com
  wrong_name();
}

document.getElementById("track-event-button").onclick = function () {
  // Track a click event to jslogger.com
  jslogger.event({click: "Event button"});
}
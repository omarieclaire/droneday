// google drive stuff

// Client ID and API key from the Developer Console
var CLIENT_ID = 'common-d2ecf';
var api_key = 'AIzaSyALlQNEoMXQtNqq4v1S61ZiBg98NScwt6I';

var folderId = '1uDSd4nvFzlcstRy2xQ_SRbrO1czS5mGv';
var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&fields=files(mimeType%2CwebContentLink)&key=" + api_key;


const Http = new XMLHttpRequest();
Http.addEventListener("load", function() {
  var json = JSON.parse(this.responseText);
  if(json.error) {
    console.log("ERROR: " + json.error.errors[0].message);
  } else {
    var allImages = '';
    var files = json.files;
    for (var i in files) {
      var file = files[i];
      if(file.mimeType.startsWith("image")) {
        allImages += '<img src ="' + file.webContentLink + '" >';
      }
    }

    document.getElementById('photos').innerHTML = allImages;
  }
});
Http.open("GET", url);
Http.send();

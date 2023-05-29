// 1. get a list of the video URLs or keys from google drive
// 2. for each video URL, create a <div> with an <iframe> in it.

// let's assume we have a variable with the google video URLs.
var video_keys = [];

// test 

// Client ID and API key from the Developer Console
var CLIENT_ID = 'common-d2ecf';
var api_key = 'AIzaSyALlQNEoMXQtNqq4v1S61ZiBg98NScwt6I';

var folderId = '1XhIstw-3Y_RYhNQV_29CxRCiFuFDrSLL';
var url = "https://www.googleapis.com/drive/v3/files?q='" + folderId + "'+in+parents&fields=files(id%2CmimeType%2CwebContentLink)&key=" + api_key;


const HttpVideos = new XMLHttpRequest();
HttpVideos.addEventListener("load", function() {
  var json = JSON.parse(this.responseText);
  if(json.error) {
    console.log("ERROR: " + json.error.errors[0].message);
  } else {
    var allImages = '';
    var files = json.files;
    for (var i in files) {
      var file = files[i];
      video_keys.push(file.id);
    }

    var video_string = "";

    for (var i = 0; i < video_keys.length ; i++) {
      var key = video_keys[i];

      if(key !== "1V776B05ryiHiywamHlY0V1ts5B_oMeiG") {
        var str = '<div style="padding-top: 100%; position: relative; overflow: hidden;"><iframe frameborder="0" allowfullscreen="" src="https://onelineplayer.com/player.html?autoplay=false&loop=false&autopause=true&muted=false&url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fauthuser%3D0%26id%3D' + key + '%26export%3Ddownload&time=true&progressBar=true&playButton=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&logo=false&quality=720p" style="position: absolute; height: 100%; width: 100%; left: 0px; top: 0px;"></iframe></div>';

        video_string = video_string + str;
      }

    }

    var div_element = document.getElementById("videos");
    div_element.innerHTML = video_string;

  }
});
HttpVideos.open("GET", url);
HttpVideos.send();

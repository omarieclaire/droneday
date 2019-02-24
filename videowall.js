// 1. get a list of the video URLs or keys from google drive
// 2. for each video URL, create a <div> with an <iframe> in it.

// let's assume we have a variable with the google video URLs.
var video_keys = [];


// Client ID and API key from the Developer Console
var CLIENT_ID = 'common-d2ecf';
var api_key = 'AIzaSyALlQNEoMXQtNqq4v1S61ZiBg98NScwt6I';

var folderId = '1uDSd4nvFzlcstRy2xQ_SRbrO1czS5mGv';
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

    document.getElementById('photos').innerHTML = allImages;
  }
});
HttpVideos.open("GET", url);
HttpVideos.send();


console.log("the video keys are:");
console.log(video_keys);



var video_string = "";

for (var i = 0; i < video_keys.length ; i++) {
  var key = video_keys[i];

  var str = '<div style="padding-top: 100%; position: relative; overflow: hidden;"><iframe frameborder="0" allowfullscreen="" src="https://onelineplayer.com/player.html?autoplay=false&loop=false&autopause=true&muted=false&url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fauthuser%3D0%26id%3D1' + key + '%26export%3Ddownload&poster=https%3A%2F%2Fdrive.google.com%2Fuc%3Fauthuser%3D0%26id%3D12mevRICYGIoF0VWG2UktLpKZJUIkebAT%26export%3Ddownload&time=true&progressBar=true&playButton=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&logo=false&quality=720p" style="position: absolute; height: 100%; width: 100%; left: 0px; top: 0px;"></iframe></div>';

  video_string = video_string + str;
}

var div_element = document.getElementById("videos");

console.log(video_string);
console.log(div_element);
div_element.innerHTML = video_string;

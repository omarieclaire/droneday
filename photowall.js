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
      document.getElementById('photos').innerHTML = allImages;
    }
  }
});
Http.open("GET", url);
Http.send();



// gapi.load('client', start);

// function start() {
//   // Initialize the client with the API key and necessary scopes
//   gapi.client.init({
//     apiKey: 'AIzaSyALlQNEoMXQtNqq4v1S61ZiBg98NScwt6I',
//     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
//     clientId: 'common-d2ecf',
//     scope: 'https://www.googleapis.com/auth/drive.readonly',
//   }).then(function() {
//     // Authenticate the user and load the Drive API client
//     return gapi.auth2.getAuthInstance().signIn();
//   }).then(function() {
//     // Retrieve the list of image files from the specified folder
//     return gapi.client.drive.files.list({
//       q: "mimeType='image/jpeg' or mimeType='image/png' and parents in '<1uDSd4nvFzlcstRy2xQ_SRbrO1czS5mGv>'",
//       fields: 'nextPageToken, files(id, name, thumbnailLink)',
//       pageSize: 100
//     });
//   }).then(function(response) {
//     var images = response.result.files;
//     var grid = document.getElementById('grid');

//     // Loop through each image and create a thumbnail
//     for (var i = 0; i < images.length; i++) {
//       var img = document.createElement('img');
//       img.src = images[i].thumbnailLink;
//       img.alt = images[i].name;

//       // Add the thumbnail to the grid
//       grid.appendChild(img);
//     }
//   }, function(error) {
//     console.error(error);
//   });
// }
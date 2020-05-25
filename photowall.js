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

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  //allImages += '<img src="p' + i + '.jpg" />';
  allImages += '<img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty">';
}

console.log('hi marie');
document.getElementById('photos').innerHTML = allImages;
// $('#photos').append(allImages);

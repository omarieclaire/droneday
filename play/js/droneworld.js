  var earth;
  var coordList = [];

  function initialize() {
    var options = {
      atmosphere: true,
      center: [0, 0],
      zoom: 0
    };
    earth = new WE.map('earth_div', options);
    WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
      minZoom: 0,
      maxZoom: 5,
      attribution: 'NASA'
    }).addTo(earth);

    function addDestination(coordinate, name){
      let marker = WE.marker(coordinate).addTo(earth);
      coordList.push(coordinate);
      marker.bindPopup(name, {
        maxWidth: 150,
        closeButton: true
      })
    }

addDestination([52.531677, 13.381777], "Berlin");
addDestination([49.8485, -99.9501],"Brandon, Manitoba");
addDestination([-34.6037, -58.3816],"Buenos Aires, Argentina");
addDestination([53.631611, -113.323975],"Edmonton, US");
addDestination([53.5461, -113.4938],"Edmonton, Canada");
addDestination([50.6292, 3.0573],"Lille, France");
addDestination([42.4627, 2.4450],"Logroño,  Spain");
addDestination([49.2057, -122.9110],"New Westminster, Canada");
addDestination([47.0379, -122.9007],"Olympia, USA");
addDestination([45.4215, -75.6972],"Ottawa, Canada");
addDestination([44.3091, -78.3197],"Peterborough, Canada");
addDestination([48.8167, -123.5089],"Salt Spring Island, Canada");
addDestination([43.6532, -79.3832],"Toronto, Canada");
addDestination([49.2827, -123.1207],"Vancouver, Canada");

    // addDestination([XXX], "xxx");
    // addDestination([XXX], "xxx");



    // var marker4 = WE.marker([-34.603722, -58.381592]).addTo(earth);
    // coordList.push([-34.603722, -58.381592]);
    // marker4.bindPopup("Buenos Aires", {
    //   maxWidth: 120,
    //   closeButton: true
    // });

    // var markerCustom = WE.marker([50, -9], '../img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
  }
  var before = null;
  var toggle = false;
  function toggleSpin() {
      // this is a recursive function
      requestAnimationFrame(function animate(now) {
        if(!toggle) {
          before = null;
          // break out of the recursion by exiting the function
          return;
        }
        var c = earth.getPosition();
        var elapsed = before? now - before: 0;
        before = now;
        earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
        // here is where we "recurse"
        requestAnimationFrame(animate);
      });
    toggle = !toggle;
  }

  function panTo(coords) {
    // toggleSpin();
    earth.panTo(coords);
    }


  function randomDrone(){
    let randomCoord = coordList[Math.floor(Math.random() * coordList.length)];
    panTo(randomCoord);
  }

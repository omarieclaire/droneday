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

    addDestination([49.2827, -123.1207], "Vancouver");
    addDestination([52.531677, 13.381777], "Berlin");
    addDestination([30.058056, 31.228889], "Cairo");
    addDestination([43.6532, -79.3832], "Toronto");
    addDestination([-34.603722, -58.381592], "Buenos Aires");

/*
    var marker = WE.marker([52.531677, 13.381777]).addTo(earth);
    coordList.push([52.531677, 13.381777]);
    marker.bindPopup("Berlin", {
      maxWidth: 150,
      closeButton: true
    }).openPopup();

    var marker2 = WE.marker([30.058056, 31.228889]).addTo(earth);
    coordList.push([30.058056, 31.228889]);
    marker2.bindPopup("Cairo", {
      maxWidth: 120,
      closeButton: true
    });

    var marker3 = WE.marker([43.6532, -79.3832]).addTo(earth);
    coordList.push([43.6532, -79.3832]);
    marker3.bindPopup("Toronto", {
      maxWidth: 120,
      closeButton: true
    });

    var marker4 = WE.marker([-34.603722, -58.381592]).addTo(earth);
    coordList.push([-34.603722, -58.381592]);
    marker4.bindPopup("Buenos Aires", {
      maxWidth: 120,
      closeButton: true
    });
*/
    var markerCustom = WE.marker([50, -9], '../img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
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

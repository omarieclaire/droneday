  var earth;
  var coordList = [];

  function initialize() {
    var options = {
      atmosphere: true,
      center: [0, 0],
      zoom: 2.20
    };
    earth = new WE.map('earth_div', options);

    // WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   minZoom: 0,
    //   maxZoom: 5,
    //   attribution: 'NASA'
    // }).addTo(earth);

    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
          tileSize: 256,
          // bounds: [[-85, -180], [85, 180]],
          minZoom: 1,
          maxZoom: 5,
          attribution: 'WebGLEarth example',
          tms: true
        }).addTo(earth);

    function addDestination(coordinate, name, links) {
      let marker = WE.marker(coordinate).addTo(earth);
      var markup;
      if(links.length === 1) {
        var link = links[0];
        markup = '<a href="' + link + '" target="_blank">' + name + ' </a>';
      } else {
        markup = name + '<br/><ul>';
        for(var i=0; i < links.length; i++) {
          markup = markup + '<li><a href="' + links[i] + '"target="_blank">drone ' + (i+1) + '</a></li>';
        }
        markup = markup + '</ul>';
      }

      coordList.push(coordinate);
      marker.bindPopup(markup, {
        maxWidth: 50,
        closeButton: true
      })
    }

    for (var i = 0; i < EVENTLIST_GROUPED.length; i++) {
      var eventName = EVENTLIST_GROUPED[i][0].name;
      var eventCoord = EVENTLIST_GROUPED[i][0].coord;
      var links = EVENTLIST_GROUPED[i].map(event => event.link);
      addDestination(eventCoord, eventName, links);
    }

    
    // var markerr = WE.marker([51.5, -0.09]).addTo(earth);
    // markerr.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

    // var marker2r = WE.marker([30.058056, 31.228889]).addTo(earth);
    // marker2r.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});

    // var markerCustom = WE.marker([50, -9], '././img/ ', 100, 24).addTo(earth);

    // earth.setView([51.505, 0], 6);




    // var markerCustom = WE.marker([50, -9], 'https://media.githubusercontent.com/media/omarieclaire/omarieclaire.github.io/master/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
  }

  var before = null;
  var toggle = false;

  function toggleSpin() {
    // this is a recursive function
    requestAnimationFrame(function animate(now) {
      if (!toggle) {
        document.getElementById("spinbtn").src = "https://media.githubusercontent.com/media/omarieclaire/omarieclaire.github.io/master/img/spin.png";
        before = null;
        // break out of the recursion by exiting the function
        return;
      }
      var c = earth.getPosition();
      var elapsed = before ? now - before : 0;
      before = now;
      earth.setCenter([c[0], c[1] + 0.1 * (elapsed / 30)]);
      // here is where we "recurse"
      requestAnimationFrame(animate);
      document.getElementById("spinbtn").src = "https://media.githubusercontent.com/media/omarieclaire/omarieclaire.github.io/master/img/stopspin.png";
    });
    toggle = !toggle;
  }

  function panTo(coords) {
    earth.setZoom(4);
    earth.panTo(coords);
  }


  function randomDrone() {
    toggle = false;
    let randomCoord = coordList[Math.floor(Math.random() * coordList.length)];
    panTo(randomCoord);
  }


  var infoHidden = true;

  function toggleInfo() {
    if (infoHidden) {
      // document.getElementById("infobtn").src = "https://media.githubusercontent.com/media/omarieclaire/omarieclaire.github.io/master/img/questionalt.png";
      let infoDiv = document.getElementById("infoDiv");
      infoDiv.innerHTML = '<a target="_blank" href="https://droneday.org/submit-event"> Join us!</a>';

    } else {
      let infoDiv = document.getElementById("infoDiv");
      infoDiv.innerHTML = " ";
    }
    infoHidden = !infoHidden;
  }


  var ishidden = true;
  function toggleEventList() {
    if (ishidden) {
      document.getElementById("listbtn").src = "https://github.com/omarieclaire/omarieclaire.github.io/blob/master/play/img/openeye.png";
      let ul = document.createElement("ul");
      for (var i = 0; i < EVENTLIST.length; i++) {
        let event = EVENTLIST[i];

        let li = document.createElement("li");
        // li.innerHTML = event.name;
        // to add links:
        li.innerHTML = '<a onclick="panTo([' + event.coord + ']);">' + event.name + '</a>'

        // li.innerHTML = '<a target="_blank" href="' + event.link + '" onclick="panTo([10, -10]);">' + event.name + '</a>'


        // <a href="LINK"> XXX</a>
        ul.appendChild(li);
      }
      let eventDiv = document.getElementById("eventList");
      eventDiv.appendChild(ul);

    } else {
      document.getElementById("listbtn").src = "https://github.com/omarieclaire/omarieclaire.github.io/blob/master/play/img/closedeye.png";
      // document.querySelector('#listbtn').innerHTML = 'Hidee';

      let eventDiv = document.getElementById("eventList");
      eventDiv.innerHTML = "";

      // let button = document.getElementById("listbtn");
      // button.setAttribute("value", "Show");
    }
    ishidden = !ishidden;
  }

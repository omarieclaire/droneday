  var earth;
  var coordList = [];

  const eventList = [{
      name: "Asheville, USA",
      coord: [35.5951, -82.5515],
      link: "www"
    },
    {
      name: "Bega, Australia",
      coord: [-36.6889, 149.8416],
      link: "www"
    },
    {
      name: "Brandon, Manitoba",
      coord: [49.8485, -99.9501],
      link: "www"
    },
    {
      name: "Buenos Aires, Argentina",
      coord: [-34.6037, -58.3816],
      link: "www"
    },
    {
      name: "Burlington, USA",
      coord: [44.4759, -73.2121],
      link: "www"
    },
    {
      name: "Charlottetown, Canada",
      coord: [46.2382, -63.1311],
      link: "www"
    },
    {
      name: "Chicago, USA",
      coord: [41.8781, -87.6298],
      link: "www"
    },
    {
      name: "East Lansing, USA",
      coord: [42.7370, -84.4839],
      link: "www"
    },
    {
      name: "Edmonton ALTA USA",
      coord: [53.631611, -113.323975],
      link: "www"
    },
    {
      name: "Edmonton, Alberta Canada",
      coord: [53.5461, -113.4938],
      link: "www"
    },
    {
      name: "Edmonton, Canada",
      coord: [53.5461, -113.4938],
      link: "www"
    },
    {
      name: "Guelph, Canada",
      coord: [43.5448, -80.2482],
      link: "www"
    },
    {
      name: "Hamilton, Canada",
      coord: [43.2557, -79.8711],
      link: "www"
    },
    {
      name: "Kent, UK",
      coord: [51.2787, 0.5217],
      link: "www"
    },
    {
      name: "Kingston, Canada",
      coord: [44.2312, -76.4860],
      link: "www"
    },
    {
      name: "Lille, France",
      coord: [50.6292, 3.0573],
      link: "www"
    },
    {
      name: "Logroño,  Spain",
      coord: [42.4627, -2.4450],
      link: "www"
    },
    {
      name: "New Westminster, Canada",
      coord: [49.2057, -122.9110],
      link: "www"
    },
    {
      name: "Oaxaca, Mexico",
      coord: [17.0732, -96.7266],
      link: "www"
    },
    {
      name: "Olympia, USA",
      coord: [47.0379, -122.9007],
      link: "www"
    },
    {
      name: "Ottawa, Ontario",
      coord: [45.4215, -75.6972],
      link: "www"
    },
    {
      name: "Peterborough, Canada",
      coord: [44.3091, -78.3197],
      link: "www"
    },
    {
      name: "Salt Spring Island, Canada",
      coord: [48.8167, -123.5089],
      link: "www"
    },
    {
      name: "Toronto, Canada",
      coord: [43.6532, -79.3832],
      link: "www"
    },
    {
      name: "Toronto, Canada",
      coord: [43.6532, -79.3832],
      link: "www"
    },
    {
      name: "Vancouver Canada",
      coord: [49.2827, -123.1207],
      link: "www"
    },
    {
      name: "Victoria, Canada",
      coord: [48.4284, -123.3656],
      link: "www"
    },
    {
      name: "North Carolina, USA",
      coord: [35.8257, -82.0407],
      link: "www"
    }
  ];

  function initialize() {
    var options = {
      atmosphere: true,
      center: [0, 0],
      zoom: 2.20
    };
    earth = new WE.map('earth_div', options);

    WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
      minZoom: 0,
      maxZoom: 5,
      attribution: 'NASA'
    }).addTo(earth);

    function addDestination(coordinate, name, link) {
      let marker = WE.marker(coordinate).addTo(earth);
      let markup = '<a href="' + link + '" target="_blank">' + name + ' </a>';
      coordList.push(coordinate);
      marker.bindPopup(markup, {
        maxWidth: 50,
        closeButton: true
      })
    }

    for (var i = 0; i < eventList.length; i++) {
      addDestination(eventList[i].coord, eventList[i].name, eventList[i].link);
    }

    // var markerCustom = WE.marker([50, -9], '../img/logo-webglearth-white-100.png', 100, 24).addTo(earth);
  }

  var before = null;
  var toggle = false;

  function toggleSpin() {
    // this is a recursive function
    requestAnimationFrame(function animate(now) {
      if (!toggle) {
        document.getElementById("spinbtn").src = "../img/spin.png";
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
      document.getElementById("spinbtn").src = "../img/stopspin.png";
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

  var ishidden = true;
  function toggleEventList() {
    if (ishidden) {
      document.getElementById("listbtn").src = "../img/openeye.png";
      let ul = document.createElement("ul");
      for (var i = 0; i < eventList.length; i++) {
        let event = eventList[i];

        let li = document.createElement("li");
        // li.innerHTML = event.name;
        // to add links:
        li.innerHTML = '<a href="' + event.link + '">' + event.name + '</a>'
        // <a href="LINK"> XXX</a>
        ul.appendChild(li);
      }
      let eventDiv = document.getElementById("event-list");
      eventDiv.appendChild(ul);

    } else {
      document.getElementById("listbtn").src = "../img/closedeye.png";
      // document.querySelector('#listbtn').innerHTML = 'Hidee';

      let eventDiv = document.getElementById("event-list");
      eventDiv.innerHTML = "";

      // let button = document.getElementById("listbtn");
      // button.setAttribute("value", "Show");
    }
    ishidden = !ishidden;
  }

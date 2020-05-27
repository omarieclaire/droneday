  var earth;
  var coordList = [];

  const eventList = [{
      name: "Asheville, USA",
      coord: [35.5951, -82.5515]
    },
    {
      name: "Bega, Australia",
      coord: [-36.6889, 149.8416]
    },
    {
      name: "Brandon, Manitoba",
      coord: [49.8485, -99.9501]
    },
    {
      name: "Buenos Aires, Argentina",
      coord: [-34.6037, -58.3816]
    },
    {
      name: "Burlington, USA.",
      coord: [44.4759, -73.2121]
    },
    {
      name: "Charlottetown, Canada”,
      coord: [46.2382, -63.1311]
    },
    {
      name: "Chicago, USA",
      coord: [41.8781, -87.6298]
    },
    {
      name: "East Lansing, USA",
      coord: [42.7370, -84.4839]
    },
    {
      name: "Edmonton ALTA USA",
      coord: [53.631611, -113.323975]
    },
    {
      name: "Edmonton, Alberta Canada",
      coord: [53.5461, -113.4938]
    },
    {
      name: "Edmonton, Canada",
      coord: [53.5461, -113.4938]
    },
    {
      name: "Guelph, Canada",
      coord: [43.5448, -80.2482]
    },
    {
      name: "Hamilton, Canada",
      coord: [43.2557, -79.8711]
    },
    {
      name: "Kent, UK”,
      coord: [51.2787, 0.5217]
    },
    {
      name: "Kingston, Canada",
      coord: [44.2312, -76.4860]
    },
    {
      name: "Lille, France",
      coord: [50.6292, 3.0573]
    },
    {
      name: "Logroño,  Spain",
      coord: [42.4627, -2.4450]
    },
    {
      name: "New Westminster, Canada",
      coord: [49.2057, -122.9110]
    },
    {
      name: "Oaxaca, Mexico",
      coord: [17.0732, -96.7266]
    },
    {
      name: "Olympia, USA",
      coord: [47.0379, -122.9007]
    },
    {
      name: "Ottawa, Ontario",
      coord: [45.4215, -75.6972]
    },
    {
      name: "Peterborough, Canada",
      coord: [44.3091, -78.3197]
    },
    {
      name: "Salt Spring Island, Canada",
      coord: [48.8167, -123.5089]
    },
    {
      name: "Toronto, Canada",
      coord: [43.6532, -79.3832]
    },
    {
      name: "Toronto, Canada",
      coord: [43.6532, -79.3832]
    },
    {
      name: "Vancouver Canada",
      coord: [49.2827, -123.1207]
    },
    {
      name: "Victoria, Canada",
      coord: [48.4284, -123.3656]
    },
    {
      name: "North Carolina, USA",
      coord: [35.8257, -82.0407]
    }
  ];

  function initialize() {
    var options = {
      atmosphere: true,
      center: [0, 0],
      zoom: 2.25
    };
    earth = new WE.map('earth_div', options);

    WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg', {
      minZoom: 0,
      maxZoom: 5,
      attribution: 'NASA'
    }).addTo(earth);

    function addDestination(coordinate, name) {
      let marker = WE.marker(coordinate).addTo(earth);
      coordList.push(coordinate);
      marker.bindPopup(name, {
        maxWidth: 50,
        closeButton: true
      })
    }

    for (var i = 0; i < eventList.length; i++) {
      addDestination(eventList[i].coord, eventList[i].name);
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
    // toggleSpin();
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
        li.innerHTML = event.name;
        // to add links:
        //li.innerHTML = '<a href="' + event.link + '">' + event.name + '</a>';
        ul.appendChild(li);
      }
      let eventDiv = document.getElementById("event-list");
      eventDiv.appendChild(ul);

      // let button = document.getElementById("listbtn");
      // button.setAttribute("value", "Hide");

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

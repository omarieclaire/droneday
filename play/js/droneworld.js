  var earth;
  var coordList = [];

  const eventList = [{
      name: "Berlin",
      coord: [52.531677, 13.381777],
    },
    {
      name: "Brandon, Manitoba",
      coord: [49.8485, -99.9501],
    },
    {
      name: "Buenos Aires, Argentina",
      coord: [-4.6037, -58.3816]
    },
    // {
    //   name: "Edmonton, US",
    //   coord: [53.631611, -113.323975],
    // },
    {
      name: "Edmonton, Canada",
      coord: [53.5461, -113.4938],
    },
    {
      name: "Lille, France",
      coord: [50.6292, 3.0573],
    },
    {
      name: "Logroño,  Spain",
      coord: [42.4627, 2.4450],
    },
    {
      name: "New Westminster, Canada",
      coord: [49.2057, -122.9110],
    },
    {
      name: "Olympia, USA",
      coord: [47.0379, -122.9007],
    },
    {
      name: "Ottawa, Canada",
      coord: [45.4215, -75.6972],
    },
    {
      name: "Peterborough, Canada",
      coord: [44.3091, -78.3197],
    },
    {
      name: "Salt Spring Island, Canada",
      coord: [48.8167, -123.5089],

    },
    {
      name: "Toronto, Canada",
      coord: [43.6532, -79.3832],
    },
    {
      name: "Vancouver, Canada",
      coord: [49.2827, -123.1207]
    }
  ];

  function initialize() {
    var options = {
      atmosphere: true,
      center: [0, 0],
      zoom: 2.25
    };
    earth = new WE.map('earth_div', options);
    // WE.tileLayer('../map.png', {

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

    for(var i=0; i<eventList.length; i++) {
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
    let randomCoord = coordList[Math.floor(Math.random() * coordList.length)];
    panTo(randomCoord);
  }


  var ishidden = true;

  function toggleEventList() {
    if (ishidden) {
      document.getElementById("listbtn").src = "../img/openeye.png";
      let ul = document.createElement("ul");
      for(var i=0; i<eventList.length; i++) {
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

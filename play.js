<!doctype html>
<html>

<head>
	<meta charset="UTF-8">
	<!-- helps responsiveness -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Listen</title>
	<link href="styles.css" rel="stylesheet" type="text/css">
</head>

<body>
	<div class="wrapper">

		<header>
			<!-- <h1 class="logo">Logo</h1> -->
			<a href="index.html"><img src="img/logo2.png" alt="circle logo" class="circle-logo"></a>
			<input type="checkbox" id="nav-toggle" class="nav-toggle">
			<nav>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="events.html">Events</a></li>
					<li><a href="listen.html">Listen</a></li>
					<!-- <li><a href="play.html">Play</a></li> -->
					<li><a href="photos.html">Photos</a></li>
					<li><a href="videos.html">Videos</a></li>
					<li><a href="press.html">Press</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>

			<label for="nav-toggle" class="nav-toggle-label">
				<span></span>
			</label>

		</header>

		<section class="home-head-2">

		</section>

		<div class="container2">
			<section class="home-about">
				<div class="home-about-textbox">
					<h1>dr(((((((((((o)))))))))))ne</h1>
					<p style="text-align: center; padding: 2em;">A list of streamable audio resources for drone sounds, ambient drones, and drone music. <a target="_blank" href="http://droneday.org/submit-music">Send in your favourite drones</a>.</p>

            <div class="worldbuttondiv">
            <img alt="show/hide list" id="listbtn" class="worldbutton" src="../img/droneboard.png" onclick=""  />
            <img alt="show/hide list" id="spinbtn" class="worldbutton" src="../img/dronegames.png" onclick=""  />
            <img alt="show/hide list" id="randombtn" class="worldbutton" src="../img/droneworld.png" onclick=""  />
          </div>

			</section>
		</div>

		<section class="cta">
			<div class="container">
				<p></p>
				<a class="button button-dark" href="mailto:%20marie@weirdcanada.com" target="_blank">Send Drones</a>
			</div>
		</section>
	</div>

</body>

</html>


// function revealMessage() {
//   document.getElementById("hiddenMessage").style.display = 'block';
// }
//
//
// var stage = new createjs.Stage("demoCanvas");
//
//
// var circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
//
// stage.update();

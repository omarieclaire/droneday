// window.addEventListener("load", () => {


  window.onload = function(){

    var myAudio = document.getElementById('my-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');

    // associate functions with the 'onclick' events
    play.onclick = playAudio;
    pause.onclick = pauseAudio;

    function playAudio() {
      myAudio.play();
    }

    function pauseAudio() {
      myAudio.pause();
    }

  }

// 192.168.1.52:8000

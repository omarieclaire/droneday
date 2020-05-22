window.addEventListener("load", () => {

  var dronegen = [{
    word: 'Shake',
    desc: 'Shake your entire body wild while making a sound.'
  }, {
    word: 'Release',
    desc: 'Form a sound in your mind. Release it out of your nose. Release it out of your mouth. Out of your belly. Out of your entire body.'
  }, {
    word: 'ZZZTHHSHH',
    desc: 'Press your hands over your ears and and make sounds like zzzzzz and thhhhh and mmmm and others that come out.'
  }, {
    word: 'Ground',
    desc: 'As you breathe out, make a high noise that gets deeper and deeper as you slowly collapse to the ground.'
  }, {
    word: 'Sway',
    desc: 'Sway your body. Hum a long deep hum as you sway. Keep humming until your body is ready to stop.'
  }, {
    word: 'Throat',
    desc: 'Breathe into the shallows of your throat. Breathe into your chest. Breathe your belly. Breathe the bowl of your pelvic floor. With your last breath out make the softest sound.'
  }, {
    word: 'Bend',
    desc: 'Make a sound. Bend the sound and make it again. Fold the sound in two. Fold it again. Fold it until it is too tiny to make and hold it on your tongue until it dissolves.'
  }, {
    word: 'Fragile',
    desc: 'Make sounds with objects around you until you find the most fragile sound. Wrap the air around the sound. Make the sound again and again, softer and softer until it disappears.'
  }, {
    word: 'Listen',
    desc: 'Listen until you can hear everything.'
  }, {
    word: 'Space',
    desc: 'There is a space waiting for you. The space is shaped exactly like the sound you will make. Place your sound in space, gently, precisely.'
  }, {
    word: 'Between',
    desc: 'Make a sound. Make another sound. Listen for the space between two sounds. Hold your attention there in the space between.'
  }, {
    word: 'Friend',
    desc: 'Press your ear against any appliance who is singing - like a fridge. Sing along exactly the same.'
  }, {
    word: 'Ghost',
    desc: 'Remember the last sound you heard. Allow it to haunt you. Let it move through you until it is inseparable from you.'
  }, {
    word: 'Body',
    desc: 'Press your ear against a living body (another? your own?) and listen.'
  }, {
    word: 'Object',
    desc: 'Find an object and make it sacred with your will. Hold it in your hands. Touch it with your eyes and breath. Sing to it in one long note, bathing it in your note.'
  }, ];

  // bucket to hold used items
  var usedDrones = [];

  function randomSelector() {
    var dronegenLength = dronegen.length;

    var randomNumber = Math.floor(Math.random() * dronegenLength);

    var newword = dronegen[randomNumber].word;
    var newdesc = dronegen[randomNumber].desc;

    document.getElementById("word").innerHTML = newword;
    document.getElementById("desc").innerHTML = newdesc;

    usedDrones.push(dronegen[randomNumber]);
    dronegen.splice(randomNumber, 1);

    if (dronegenLength === 1) {
      // copy usedDrones into dronegen
      dronegen = [...usedDrones];
      //empty bucket - so next time we don't have doubles
      usedDrones = [];
    }
  }


  var handleClick = () => {
    event.preventDefault();
    randomSelector();
  };
  genbtn.addEventListener("touchend", handleClick, false);
  genbtn.addEventListener("click", handleClick);

});


//after the content is loaded, the code will run
window.addEventListener("load", () => {
  const title = document.querySelector(".title")
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#05668dff",
    "#028090ff",
    "#00a896ff",
    "#05668dff",
    "#02c39aff",
    "#f0f3bdff",
    "#ff9f1c",
    "#ffbf69",
    "#cbf3f0",
    "#2ec4b6",
    "#90be6d",
    "#43aa8b",
    "#577590",
    "#fe938c",
    "#e6b89c",
    "#9cafb7",
    "#4281a4",
    "#ff9770",
    "#9b9b7a",
    "#76949f",
    "#86bbbd",
  ];

  pads.forEach((pad, index) => {
    pad.style.backgroundColor = colors[index];
    pad.addEventListener("click", () => {
      // reset the time so sounds can play more than once?
      sounds[index].playbackRate = 0.3;
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
    });
  });

  const createBubble = index => {    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    title.style.color = colors[index];

    bubble.style.animation = `jump 7s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});

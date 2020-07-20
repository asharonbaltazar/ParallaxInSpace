let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

const planetOne = document.querySelector(".planet-one"),
  planetTwo = document.querySelector(".planet-two");

// Event Listeners
document.getElementById("settings-btn").addEventListener("click", () => {
  document.getElementById("settings-panel").style.display = "block";
});

document.body.addEventListener("click", (e) => {
  if (e.target.className === "container") {
    document.getElementById("settings-panel").style.display = "none";
  }
});

document.getElementById("range-p1").addEventListener("input", (e) => {
  planetOne.style.backgroundSize = e.target.value + "%";
});

document.getElementById("range-p2").addEventListener("input", (e) => {
  planetTwo.style.backgroundSize = e.target.value + "%";
});

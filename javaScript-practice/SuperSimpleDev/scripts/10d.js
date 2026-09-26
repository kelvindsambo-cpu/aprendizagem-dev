const gamingButton = document.querySelector(".js-gaming-btn");
const musicButton = document.querySelector(".js-music-btn");
const techButton = document.querySelector(".js-tech-btn");


function changeBackground(button) {
  if (button.classList.contains("is-toggled")){
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}

function toggleOne(button) {
  const wasToggled = button.classList.contains("is-toggled");

  gamingButton.classList.remove("is-toggled");
  musicButton.classList.remove("is-toggled");
  techButton.classList.remove("is-toggled");

  if (!wasToggled) {
    button.classList.add("is-toggled");
  }
}

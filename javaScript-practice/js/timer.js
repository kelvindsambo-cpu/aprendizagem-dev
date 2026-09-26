let circularFrame = document.querySelector(".circular-number-frame");
let startButton = document.querySelector(".start-button");

let count = 10 * 60;
let timer; // Currently undefined

startButton.addEventListener("click", function() {
    // Prevent stacking multiple timers on repeated clicks
    if (timer) return;

    timer = setInterval(function() {
        count--;

        let minutes = Math.trunc(count / 60);
        let seconds = count % 60;

        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');

        circularFrame.innerHTML = `${formattedMinutes}:${formattedSeconds}`;

        if (count <= 0) {
            clearInterval(timer);
            timer = null; // Reset so the timer can be started again if needed
        }
    }, 1000);
});
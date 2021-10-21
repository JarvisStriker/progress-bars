/* barWidth: Object that contains widths of all progress bars -> {progressBarID : width} */
/* barStatus: Object that contains start/stop status of all progress bars -> {progressBarId : status} */

var progressBars = 0;
var barWidth = {};
var barStatus = {};

function addProgressBar() {
    progressBars++;
    let id = 'progressBar_' + progressBars;

    /* Creating a new div element */
    const newProgressBar = document.createElement(
        "div"
    );

    /* Creating a new button with text 'Start' */
    const startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    startButton.setAttribute('id', 'start_' + id)

    /* Set status of progress bar to true and get it to start animating */
    startButton.onclick = function (event) {
        let barId = event.path[0].id.replace('start_', '')
        barStatus[barId] = true
        animate(barId)
    };

    /* Creating a new button with text 'Stop' */
    const stopButton = document.createElement("button");
    stopButton.innerHTML = "Stop";
    stopButton.style.margin = "0em 1em"
    stopButton.setAttribute('id', 'stop_' + id)

    /* Set status of progress bar to false and stop it from animating */
    stopButton.onclick = function (event) {
        let barId = event.path[0].id.replace('stop_', '')
        barStatus[barId] = false
    };

    /* Creating a new button with text 'Restart' */
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Restart";
    resetButton.setAttribute('id', 'restart_' + id)

    /* Stop & restart the progress bar's animation */
    resetButton.onclick = function (event) {
        let barId = event.path[0].id.replace('restart_', '')
        barStatus[barId] = false
        barWidth[barId] = 1
        setTimeout(() => { barStatus[barId] = true; animate(barId) }, 30)
    };

    newProgressBar.classList.add("progressBar");
    newProgressBar.setAttribute('id', id)

    const parentProgressBar = document.getElementsByClassName("progress");

    /* Injecting the newly created div and buttons as children */
    parentProgressBar[0].appendChild(newProgressBar);
    parentProgressBar[0].appendChild(startButton)
    parentProgressBar[0].appendChild(stopButton)
    parentProgressBar[0].appendChild(resetButton)

}

function animate(id) {
    if (!barWidth[id])
        barWidth[id] = 1;
    /* To go from 0px to 200px in 5 seconds 
       200px -> 200 steps; 
       5 seconds -> 5000 milliseconds
       To calculate how many milliseconds should lapse before a step is incremented, 5000/200 = 25 => 25 milliconds should lapse to increase 1px */

    /* Call scene function after every 25 millisecond to increment 1 step*/
    let identity = setInterval(scene, 25);
    function scene() {
        if (barWidth[id] >= 200 || !barStatus[id]) {
            /* Once the progress bar is complete or if the status is false(stop), clear the interval */
            clearInterval(identity);
        } else if (barStatus[id]) {
            barWidth[id]++;

            /* Add width to the progressBar with id received as parameter */
            document.getElementById(id).style.width = barWidth[id] + "px";
        }
    }
}

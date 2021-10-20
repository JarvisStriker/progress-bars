
var progressBars = 0;
function addProgressBar() {
    /* Disable button till the progress bar is 100% complete */
    document.getElementById('addProgressBar').disabled = true;

    progressBars++;

    /* Creating a new div element */
    const newProgressBar = document.createElement(
        "div"
    );

    /* Adding progress bar css class */
    newProgressBar.classList.add("progressBar");

    /* Setting id for the created div element */
    let id = 'progressBar_' + progressBars;
    newProgressBar.setAttribute('id', id)

    /* Getting reference of parent div element */
    const parentProgressBar = document.getElementsByClassName("progress");

    /* Injecting the newly created div as a child */
    parentProgressBar[0].appendChild(newProgressBar);

    /* Setting the width of progress bar as 1 */
    let width = 1;

    /* To go from 0px to 200px in 5 seconds 
       200px -> 200 steps; 
       5 seconds -> 5000 milliseconds
       To calculate how many milliseconds should lapse before a step is incremented, 5000/200 = 25 => 25 milliconds should lapse to increase 1px */

    /* Call scene function after every 25 millisecond to increment 1 step*/
    let identity = setInterval(scene, 25);
    function scene() {
        if (width >= 200) {
            /* Once the progress bar is complete, clear the interval */
            clearInterval(identity);

            /* Enable back the button to add more progress bars */
            document.getElementById('addProgressBar').disabled = false;
        } else {

            /* Increment to add 1px to progress bar */
            width++;
            document.getElementById(id).style.width = width + "px";
        }
    }
}

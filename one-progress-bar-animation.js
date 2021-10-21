/* animationQueue: Array of progress bar ids. All progress bars will be animated sequentially from this queue */

var progressBars = 0;
var animationQueue = [];
function addProgressBar() {
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

    /* If animationQueue is empty, add new progress bar to queue and animate */
    if (animationQueue.length < 1) {
        animationQueue.push(id)
        animate();
    }
    /* If animationQueue is not empty and there is an animating progress bar, push to animationQueue */
    else {
        animationQueue.push(id)
    }
}

function animate() {
    if (animationQueue.length > 0) {
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

                /* Remove the progressBar id at 0th position of animmationQueue after completion */
                dequeue();

                /* If there are pending ids in the animationQueue, animate them */
                if (animationQueue.length > 0) {
                    animate();
                }
            } else {
                width++;

                /* Add width to the the progressBar at 0th position of animmationQueue */
                document.getElementById(animationQueue[0]).style.width = width + "px";
            }
        }
    }
}

function dequeue() {
    if (animationQueue.length > 0)
        /* Remove the first element (0th position) from animationQueue */
        animationQueue.shift()
}

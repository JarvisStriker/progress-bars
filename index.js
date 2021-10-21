/* animationQueue: Array of progress bar ids that are not in priorityQueue.*/
/* priorityQueue: Array of progress bar ids that are animating. Length is always less than or equal to 3.
   If length decreases from 3, first element of animationQueue is popped & pushed into priorityQueue */

var progressBars = 0;
var animationQueue = [];
var priorityQueue = [];

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

    /* If priortQueue has space to accomodate another progress bar, we push the new progress bar id to priorityQueue else we push it to animationQueue*/
    if (priorityQueue.length < 3) {
        priorityQueue.push(id);
        switch (priorityQueue.length) {
            /* Based on the priority, assign progress bar to different animate functions */
            case 1: animate1(id);
                break;
            case 2: animate2(id);
                break;
            case 3: animate3(id);
                break;
        }
    } else {
        animationQueue.push(id);
    }
}

function animate1(id) {
    if (priorityQueue.length > 0) {
        let width1 = 1;
        /* To go from 0px to 200px in 5 seconds 
           200px -> 200 steps; 
           5 seconds -> 5000 milliseconds
           To calculate how many milliseconds should lapse before a step is incremented, 5000/200 = 25 => 25 milliconds should lapse to increase 1px */

        /* Call scene function after every 25 millisecond to increment 1 step*/
        let identity = setInterval(scene, 25);

        function scene() {
            if (width1 >= 200) {
                /* Once the progress bar is complete, clear the interval */
                clearInterval(identity);

                /* Remove the refernce from local lexical environment */
                width1 = null;

                /* Remove the progress bar id from priorityQueue after animating */
                priorityQueue.splice(priorityQueue.indexOf(id), 1)
                if (animationQueue.length > 0 && priorityQueue.length < 3) {
                    /* Pop & Push next element from animationQueue to priorityQueue */
                    let nextElement = animationQueue.shift();
                    priorityQueue.push(nextElement)
                    animate1(nextElement)
                }
            } else {
                width1++;

                /* Add width to the progressBar with id received as parameter */
                document.getElementById(id).style.width = width1 + "px";
            }
        }
    }
}

function animate2(id) {

    if (priorityQueue.length > 0) {
        let width2 = 1;
        /* To go from 0px to 200px in 5 seconds 
          200px -> 200 steps; 
          5 seconds -> 5000 milliseconds
          To calculate how many milliseconds should lapse before a step is incremented, 5000/200 = 25 => 25 milliconds should lapse to increase 1px */

        /* Call scene function after every 25 millisecond to increment 1 step*/
        let identity = setInterval(scene, 25);
        function scene() {
            if (width2 >= 200) {
                /* Once the progress bar is complete, clear the interval */
                clearInterval(identity);

                /* Remove the refernce from local lexical environment */
                width2 = null;

                /* Remove the progress bar id from priorityQueue after animating */
                priorityQueue.splice(priorityQueue.indexOf(id), 1)
                if (animationQueue.length > 0 && priorityQueue.length < 3) {
                    /* Pop & Push next element from animationQueue to priorityQueue */
                    let nextElement = animationQueue.shift();
                    priorityQueue.push(nextElement)
                    animate2(nextElement)
                }
            } else {
                width2++;
                /* Add width to the progressBar with id received as parameter */

                document.getElementById(id).style.width = width2 + "px";
            }
        }
    }
}

function animate3(id) {

    if (priorityQueue.length > 0) {
        let width3 = 1;
        /* To go from 0px to 200px in 5 seconds 
          200px -> 200 steps; 
          5 seconds -> 5000 milliseconds
          To calculate how many milliseconds should lapse before a step is incremented, 5000/200 = 25 => 25 milliconds should lapse to increase 1px */

        /* Call scene function after every 25 millisecond to increment 1 step*/
        let identity = setInterval(scene, 25);
        function scene() {
            if (width3 >= 200) {
                /* Once the progress bar is complete, clear the interval */
                clearInterval(identity);

                /* Remove the refernce from local lexical environment */
                width3 = null;

                /* Remove the progress bar id from priorityQueue after animating */
                priorityQueue.splice(priorityQueue.indexOf(id), 1)
                if (animationQueue.length > 0 && priorityQueue.length < 3) {
                    /* Pop & Push next element from animationQueue to priorityQueue */
                    let nextElement = animationQueue.shift();
                    priorityQueue.push(nextElement)
                    animate3(nextElement)
                }
            } else {
                width3++;

                /* Add width to the progressBar with id received as parameter */
                document.getElementById(id).style.width = width3 + "px";
            }
        }
    }
}

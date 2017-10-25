$("#transitionTarget").on("transitionend", onTransitionend);


function onTransitionend(e) {
    console.log(JSON.stringify(e));
};


// Declare global variables.
var pooltable, ball, button, messageLabel;


// Page initialization - handle ball animation events.
function init() {

    // Initialize global variables.
    pooltable = document.getElementById("pooltable");
    ball = document.getElementById("ball");
    button = document.getElementById("button");
    messageLabel = document.getElementById("messageLabel");

    // Handle the event that occurs when the ball animation starts.
    ball.addEventListener("MSAnimationStart", function (e) {
        pooltable.classList.add("animate");
        messageLabel.innerHTML += "Animation <b>" + e.animationName + "</b> started at " + new Date() + ".<br>";
    }, false);

    // Handle the event that occurs for each iteration.
    ball.addEventListener("MSAnimationIteration", function (e) {
        messageLabel.innerHTML += "Animation <b>" + e.animationName + "</b> iteration completed, elapsed time " + e.elapsedTime + ".<br>";
    }, false);

    // Handle the event that occurs when the ball animation ends.
    ball.addEventListener("MSAnimationEnd", function (e) {
        button.disabled = false;
        ball.classList.remove("animate");
        pooltable.classList.remove("animate");
        messageLabel.innerHTML += "Animation <b>" + e.animationName + "</b> ended, elapsed time " + e.elapsedTime + " seconds.<br>";
    }, false);

    $("#button").click(startAnimation());
}


// Start the ball animation.
function startAnimation() {
    button.disabled = true;
    ball.classList.add("animate");
}

$(document).ready(function() {
    init();
});
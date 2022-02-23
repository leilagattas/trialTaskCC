var firstAns = document.getElementById("firstItem");
var secAns = document.getElementById("secItem");
var correctAns = document.getElementById("thirdItem");
var question = document.querySelector('h1');
var possAns = document.querySelector('#possAns');
var time;
var opacity;
var intervalID;
opacity = 0;
window.onload = function () {
    doLoop();
};
function slideUpAns() {
    setTimeout(function () {
        firstAns.className = "animacion";
        setTimeout(function () {
            secAns.className = "animacion";
            setTimeout(function () {
                correctAns.className = "animacion";
            }, 1000);
        }, 1000);
    }, 0);
}
function checkCorrecta() {
    correctAns.className = "correctAns animacion";
}
function fadeout() {
    intervalID = setInterval(hide, 100);
}
function fadeIn() {
    intervalID = setInterval(appear, 100);
}
function hide() {
    opacity = Math.max(Number(window.getComputedStyle(question).getPropertyValue("opacity")), Number(window.getComputedStyle(possAns).getPropertyValue("opacity")));
    //console.log(opacity)
    if (opacity > 0) {
        opacity = opacity - 0.1;
        question.style.opacity = opacity.toString();
        possAns.style.opacity = opacity.toString();
    }
    else {
        clearInterval(intervalID);
    }
}
function appear() {
    if (opacity < 1) {
        opacity = opacity + 0.1;
        question.style.opacity = opacity.toString();
    }
    else {
        clearInterval(intervalID);
    }
}
function doLoop() {
    possAns.style.opacity = "1";
    firstAns.className = "";
    secAns.className = "";
    correctAns.className = "";
    slideUpAns();
    setTimeout(function () {
        checkCorrecta();
        setTimeout(function () {
            fadeout();
            setTimeout(function () {
                fadeIn();
                setTimeout(function () {
                    doLoop();
                }, 2000);
            }, 2000);
        }, 1000);
    }, 5500);
}

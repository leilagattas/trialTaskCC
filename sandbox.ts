
let firstAns = document.getElementById("firstItem") as HTMLParagraphElement;
let secAns = document.getElementById("secItem") as HTMLParagraphElement;
let correctAns = document.getElementById("thirdItem") as HTMLParagraphElement;
let question = document.querySelector('h1') as HTMLHeadingElement;
let possAns = document.querySelector('#possAns') as HTMLDivElement;
let time: number;
let opacity: number;
let intervalID: any;
opacity = 0;

window.onload = function () {
    doLoop();
}


function slideUpAns() {
    setTimeout(() => {
        firstAns.className = "animacion";
        setTimeout(() => {
            secAns.className = "animacion";
            setTimeout(() => {
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
        question.style.opacity = opacity.toString()
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
    setTimeout(() => {
        checkCorrecta();
        setTimeout(() => {
            fadeout();
            setTimeout(() => {
                fadeIn();
                setTimeout(() => {
                    doLoop();
                }, 2000);
            }, 2000);
        }, 1000);
    }, 5500);
}
var numsquares = 6;
var colors = generate(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("button");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

colordisplay.textContent = pickedcolor;

easybtn.addEventListener("click", function () {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares = 3;
    colors = generate(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";

});

hardbtn.addEventListener("click", function () {
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares = 6;
    colors = generate(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";

});

reset.addEventListener("click", function () {
    numsquares = 6;
    colors = generate(numsquares);
    pickedcolor = pickcolor();
    this.textContent="New Colors?";
    colordisplay.textContent = pickedcolor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clicked = this.style.backgroundColor;
        if (clicked === pickedcolor) {
            message.textContent = "Right!!";
            clickedcolor(clicked);
            h1.style.backgroundColor = clicked;
            reset.textContent = "New Game?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!!";
        }

    });
}

function clickedcolor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedcolor;
    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generate(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

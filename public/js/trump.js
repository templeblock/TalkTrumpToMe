var path = "floatingHead"

function open() {
    document.getElementById("image").src = "/images/ti1.jpg";
}

function close() {
    document.getElementById("image").src = "/images/ti0.jpg";
}

function leftOpen() {
    document.getElementById("image").src = "/images/ti2.jpg";
}

function rightOpen() {
    document.getElementById("image").src = "/images/ti3.jpg";
}

var pause = 100

function speak() {
    var rand = Math.floor((Math.random() * 3))
    if (rand == 0) {
        setTimeout(open, pause = pause + 100)
        setTimeout(close, pause = pause + 200)
    } else if (rand == 1) {
        setTimeout(leftOpen, pause)
        setTimeout(rightOpen, pause = pause + 100)
        setTimeout(close, pause = pause + 200)
    } else if (rand == 2) {
        setTimeout(rightOpen, pause = pause + 100)
        setTimeout(leftOpen, pause = pause + 200)
        setTimeout(close(), pause = pause + 300)
    }
}
for (count = 0; count < 10000; count++) {
    speak();
}
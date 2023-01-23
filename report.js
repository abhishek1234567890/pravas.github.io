var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc() {
    for (let i = 0; i < count.length; i++) {
        inc.push(1);
        if (inc[i] != count[i].getAttribute("max-data")) {
            inc[i]++;
        }
        count[i].innerHTML = inc[i];
    }
}


var main = document.getElementById("main");
window.onscroll = function () {
    var timer = setInterval(() => {
        var topElm = main.offsetTop;
        var btmElm = main.offsetTop + main.clientHeight;
        var top_screen = window.pageYOffset;
        var bottom_screen = window.pageYOffset + window.innerHeight;
        if ((bottom_screen > topElm) && (top_screen < btmElm)) {
            intervalFunc();
        } else {
            clearInterval(timer);
        }
    }, 5000)
};
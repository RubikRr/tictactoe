// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
var arr, arr_events = [], win_block, winner, again, winning, game;

var comp_sym = "o";
var user_sym = "x";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function clearTable() {
    for (var i = 0; i < arr.length; i++) {
        arr[i].innerHTML = "";
    }
}
function checkFreeSpace() {
    var res = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasChildNodes()) {
            res = false;
        } else {
            res = true;
            break;
        }
    }

    return res;
}

function autoDrawing() {

    if (!checkFreeSpace()) {

        win_text.innerHTML = "Выиграла ничья! ";
        win_text.style.color = "blue";
        winning.style.display = "block";
        winning.style.backgroundColor = "rgba(0,0,200, 0.5)";
        win_block.style.display = "block";

        return false;
    }
    var el, rnd;

    do {
        rnd = getRandomInt(arr.length);
        el = arr[rnd];
        // console.log(rnd);
    } while (!drawSym(el, comp_sym));

    if (!checkFreeSpace()) {
        autoDrawing();
    }
}
// Write your JavaScript code.

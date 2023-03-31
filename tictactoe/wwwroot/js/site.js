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
// Write your JavaScript code.

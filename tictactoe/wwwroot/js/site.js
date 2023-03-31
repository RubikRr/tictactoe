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
function checkWinner() {
    var winner = "";
    var j = 0;


    var xy_1_1 = arr[0].innerHTML;
    var xy_1_2 = arr[4].innerHTML;
    var xy_1_3 = arr[8].innerHTML;

    var xy_2_1 = arr[2].innerHTML;
    var xy_2_2 = arr[4].innerHTML;
    var xy_2_3 = arr[6].innerHTML;

    if ((xy_1_1 && xy_1_2 && xy_1_3) || (xy_2_1 && xy_2_2 && xy_2_3)) {

        if (xy_1_1 == user_sym && xy_1_2 == user_sym && xy_1_3 == user_sym) {
            winner = user_sym;
        }
        else if (xy_1_1 == comp_sym && xy_1_2 == comp_sym && xy_1_3 == comp_sym) {
            winner = comp_sym;
        }


        if (xy_2_1 == user_sym && xy_2_2 == user_sym && xy_2_3 == user_sym) {
            winner = user_sym;
        }
        else if (xy_2_1 == comp_sym && xy_2_2 == comp_sym && xy_2_3 == comp_sym) {
            winner = comp_sym;
        }
    }




    if (!winner) {
        for (var i = 0; i < 3; i++) {

            // alert(i);

            var a1 = arr[i].innerHTML;
            var a2 = arr[i + 3].innerHTML;
            var a3 = arr[i + 6].innerHTML;

            var b1 = arr[i].innerHTML;
            var b2 = arr[i + 1].innerHTML;
            var b3 = arr[i + 2].innerHTML;


            // console.log("b1 = '" + (b1) + "' b2 = '" + (b2) + "' b3 = '" + (b3) +"'");

            if (a1 == user_sym && a2 == user_sym && a3 == user_sym) {
                winner = user_sym;
                break;
            }
            else if (a1 == comp_sym && a2 == comp_sym && a3 == comp_sym) {
                winner = comp_sym;
                break;
            }


            if (i != 0) j = 3 * i;

            b1 = arr[j].innerHTML;
            b2 = arr[j + 1].innerHTML;
            b3 = arr[j + 2].innerHTML;

            if (b1 == user_sym && b2 == user_sym && b3 == user_sym) {
                winner = user_sym;
                break;
            }
            else if (b1 == comp_sym && b2 == comp_sym && b3 == comp_sym) {
                winner = comp_sym;
                break;
            }
            if (winner)
                break;
        }
    }

    return winner;
}
// Write your JavaScript code.

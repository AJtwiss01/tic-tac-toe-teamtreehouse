/*
 * @Author: AJ  Twiss
 * @Date:   2017-02-09 23:26:29
 * @Last Modified by:   AJ  Twiss
 * @Last Modified time: 2017-02-09 23:36:34
 */

'use strict';


var board = document.getElementById('board');
var start = document.getElementById('start');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1Active = player1.classList.contains('active');
var player2Active = player2.classList.contains('active');

board.style.display = "none";


var cell = document.querySelectorAll('.button');
for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', myClick, false);
}


function myClick() {
    console.log('my click')
    start.style.display = "none";
    board.style.display = "block";

}

function Player1Enter() {
    console.log(this)
    this.style.backgroundImage = "url(img/o.svg)";
}

function Player1Leave() {
    console.log(this)
    this.style.backgroundImage = "";
}

function Player2Enter() {
    console.log(this)
    this.style.backgroundImage = "url(img/x.svg)";
}

function Player2Leave() {
    console.log(this)
    this.style.backgroundImage = "";
}
var player1Move = (e) => {
    e.target.innerHTML =  "<img src='img/o.svg' width='100%'>";
};
var player2Move = (e) => {
    e.target.innerHTML =  "<img src='img/x.svg' width='100%'>";
};


var box = document.getElementsByClassName('box');
console.log(box);

// function ClickBox() {
//     console.log('my click')

// }
for (var i = 0; i < box.length; i++) {
    // box[i].addEventListener('click', ClickBox, false);

    if (player1Active) {
        box[i].addEventListener('mouseenter', Player1Enter, false);
        box[i].addEventListener('mouseleave', Player1Leave, false);
        box[i].addEventListener('click', player1Move, false);

    }
    if (player2Active) {
        box[i].addEventListener('mouseenter', Player2Enter, false);
        box[i].addEventListener('mouseleave', Player2Leave, false);
        box[i].addEventListener('click', player2Move , false);
    }
}

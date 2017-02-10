 var board = document.getElementById('board');
 var start = document.getElementById('start');

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


var box = document.getElementsByClassName('box');
console.log(box);
 function ClickBox() {
     console.log('my click')

 }
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', ClickBox, false);
}
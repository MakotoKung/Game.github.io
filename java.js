var btn = document.getElementById('active');
var rec = document.getElementById('rec');
var op0 = document.getElementById('op0');
var btn1 = document.getElementById('active1');
var gameimg = document.getElementById('gameimg');
var op1 = document.getElementById('op1');

btn.onclick = function(){
    rec.classList.toggle('rec');
    op0.classList.toggle('op0');
    gameimg.classList.toggle('gameimg');
    op1.classList.toggle('op1');
};


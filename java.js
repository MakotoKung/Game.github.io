var btn = document.getElementById('active');
var rec = document.getElementById('rec');
var op0 = document.getElementById('op0');

btn.onclick = function(){
    rec.classList.toggle('rec');
    op0.classList.toggle('op0');
};
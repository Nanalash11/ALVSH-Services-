
/*****
var modal = document.getElementsByClassName("bottom-section");

var btn = document.getElementById("serviceBtn");

var buttonClicked = btn.addEventListener("click", function(){
    modal.style.display = block;
})
*******/

var btnInfoDisplay = document.getElementById('info-display');
console.log(btnInfoDisplay);

var bottomBtn = document.querySelector('#charity-btn');
console.log(bottomBtn);

var buttonClicked = bottomBtn.addEventListener("click", function() {
    btnInfoDisplay.style.display = "block";
})
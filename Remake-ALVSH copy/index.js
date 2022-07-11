
/*****
var modal = document.getElementsByClassName("bottom-section");

var btn = document.getElementById("serviceBtn");

var buttonClicked = btn.addEventListener("click", function(){
    modal.style.display = block;
})
*******/

/*************** When "Learn More" is clicked at bottom section **************/

var btnInfoDisplay = document.getElementById('info-display');

var bottomBtn = document.querySelector('#charity-btn');

var buttonClicked = bottomBtn.addEventListener("click", function() {
    btnInfoDisplay.style.display = "block";
})


/*************** When "Services" is clicked at top section **************/

/* var serviceSection = document.getElementsByClassName('middle-section');
var serviceBtn = document.getElementById('serviceBtn');

var serviceBtnClicked = serviceBtn.addEventListener("click", function(){
   serviceSection. .display =;    //
})


/*************** When "Services" is clicked at middle section **************/

// get amount of images in service section **/

var servicesOptions = document.querySelectorAll("#service-img").length;
var firstImage = document.querySelectorAll(".support-para");
var secondImage = document.querySelectorAll(".web-para");
var thirdImage = document.querySelectorAll(".edu-para");

for (var i = 0; i < servicesOptions; i++) {
    document.querySelector('.service-img')[i].addEventListener("click", function(event){
        console.log(event);

 /***** if (this.event === firstImage) {
       document.querySelector(".support-para").style.display = "block";
       if (this.event === secondImage){
           document.querySelector(".web-para").style.display = "block";
       }
       
   } else {
       console.log("Not found")
   } */  






    })

}
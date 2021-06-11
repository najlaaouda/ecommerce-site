

$(document).ready(function(){

  $('html').niceScroll({
    scrollspeed: 70,
    mousescrollstep: 38,
    cursorwidth: 15,
    cursorborder: 0,
    cursorcolor: '#0C090A',
    cursorborderradius: 0,
     autohidemode: false,
    horizrailenabled: true,

  });


  $(".scrol").niceScroll({
    scrollspeed: 70,
    mousescrollstep: 38,
    cursorwidth: 15,
    cursorborder: 0,
    cursorcolor: '#0C090A',
    cursorborderradius: 0,
     autohidemode: false,
    horizrailenabled: true
  });




function clearActives(classlist) {
  if (classlist) {
    for (i = 0; i < classlist.length; i++) {
      classlist[i].classList.remove('size');
    }
  }
} 



  
  var cat =[
{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last1.jpg",
"paragraph": "product",



},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last2.jpg",
"paragraph": "product",



},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last3.jpg",
"paragraph": "product",


},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last4.jpg",
"paragraph": "product",




},
{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last5.jpg",
"paragraph": "product",



},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last6.jpg",
"paragraph": "product",



},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last7.jpg",
"paragraph": "product",


},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last8.jpg",
"paragraph": "product",




},
{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last9.jpg",
"paragraph": "product",



},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last10.jpg",
"paragraph": "product",



},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last11.jpg",
"paragraph": "product",


},

{
"ID": "COO4",
"heading": " 32.05 egp", 
"Image": "img/products-sug/last12.jpg",
"paragraph": "product",



}
];

var txt = "";

for (var i=0;i<cat.length; i++) {

txt+=  ` <div class="col-md-1  col-4">
<div class=" products-sug ">
  <img class="card-img-top " src="${cat[i].Image}" alt="image-productp">
   <div class=" px-1 pt-2">
      <h4 class="price-sug-product "> ${cat[i].heading}</h4>
      <p class=" text-sug-product "> ${cat[i].paragraph} </p>
  </div>
</div>
</div>
</div>`;

document.getElementById("sug").innerHTML = txt;

}


});




//    start advs sectoion

function mouseOver(btn){
  // img.style.opacity = "1";

  document.getElementById("img"+btn.id).style.opacity = "0.5";

}
function mouseOut(x){

  document.getElementById("img"+x.id).style.opacity = "1";

}
//   advs sectoion

// Start Flip section


$('.my-flipster').flipster();


// End Flip section


// Start Counter 
var now = new Date();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear() + 1;

var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

$('#example').countdown({
  date: nextyear, // TODO Date format: 07/27/2017 17:00:00
  offset: +2, // TODO Your Timezone Offset
  day: 'Day',
  days: 'Days',
  hideOnComplete: true
}, function(container) {
  alert('Done!');
});

// End Counter


// review slider

$('.owl-carousel').owlCarousel({

  autoplay:true,
  autoplayHoverPause:true,
  lazyLoad:true,
  margin:5,
  stagePadding:5,
  responsive:{
      0:{
          items:1,
          dots:false
      },
   
      960:{
          items:3,
          loop:true
      },
      1200:{
          items:3,
          dots:true,

      },
  }

});

$(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);



})();

function startRating(item){
  rate=item.id[0];
sessionStorage.star = rate;
for(var i=0;i<5;i++){
if(i<rate){
document.getElementById((i+1)).style.color= "#FFC600";
}
else{
document.getElementById((i+1)).style.color="#cccccc";
}
}
}


var cat =[
    {
        "ID": "COO1",
        "heading": "categories", 
        "Image": "img/megamenu1.jpg",
        "subtitle1": "woman clothing",
        "subtitle2": "men clothing",
        "subtitle3": "phone & accessories",
        "subtitle4": "jewerly & watches",
        "subtitle5": "bags"

    },
 
    {
        "ID": "COO2",
        "heading": "categories", 
        "Image": "img/megamenu1.jpg",
        "subtitle1": "woman clothing",
        "subtitle2": "men clothing",
        "subtitle3": "phone & accessories",
        "subtitle4": "jewerly & watches",
        "subtitle5": "bags"

    },
 
    {
        "ID": "COO3",
        "heading": "categories", 
        "Image": "img/megamenu1.jpg",
        "subtitle1": "woman clothing",
        "subtitle2": "men clothing",
        "subtitle3": "phone & accessories",
        "subtitle4": "jewerly & watches",
        "subtitle5": "bags"
    },
  
    {
        "ID": "COO4",
        "heading": "categories", 
        "Image": "img/megamenu1.jpg",
        "subtitle1": "woman clothing",
        "subtitle2": "men clothing",
        "subtitle3": "phone & accessories",
        "subtitle4": "jewerly & watches",
        "subtitle5": "bags"


    }
];

var txt = "";
  for (var i=0;i<cat.length; i++) {

    txt += `<div>
    <a href="#" class="nav-link">
        <img src="${cat[i].Image}" alt="image" class="w-100">
    </a>
    <div class="dropdown-divider mx-3"></div>
    <div class="dropdown-header text-uppercase">categories</div>
    <a href="#" class="dropdown-item py-1">${cat[i].subtitle1}</a>
    <a href="#" class="dropdown-item py-1">${cat[i].subtitle2}</a>
    <a href="#" class="dropdown-item py-1">${cat[i].subtitle3}</a>
    <a href="#" class="dropdown-item py-1">${cat[i].subtitle4}</a>
    <a href="#" class="dropdown-item py-1">${cat[i].subtitle5}</a>
</div>
`;


    
//  document.getElementById("category-men").innerHTML = txt;
      
  }

//    start advs sectoion

function test(btn){
  // img.style.opacity = "1";

  document.getElementById("img"+btn.id).style.opacity = "0.5";

}
function test2(x){

  document.getElementById("img"+x.id).style.opacity = "1";

}
//   advs sectoion
// Start Flip section

$('.my-flipster').flipster();
// var myFlipster = $('.my-flipster').flipster(); // It's best to store the element as a variable for easy reference.
// myFlipster.flipster('next'); // Next item
// myFlipster.flipster('prev'); // Previous item
// myFlipster.flipster('jump', 0); // Jump to a specific index
// myFlipster.flipster('jump', $('.my-item')); // Jump to a specific item
// myFlipster.flipster('play'); // Resume autoplay
// myFlipster.flipster('play', 5000); // Set autoplay duration
// myFlipster.flipster('pause'); // Pause the autoplay until next jump
// myFlipster.flipster('stop'); // Stop the autoplay entirely
// myFlipster.flipster('index'); // If items are added or removed, you can tell Flipster to reindex

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
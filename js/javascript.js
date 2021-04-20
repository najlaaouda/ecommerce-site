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

//   advs sectoion

var button = document.getElementById("btn1");
var button1 = document.getElementById("btn2");
var button2 = document.getElementById("btn3");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

button.onmouseover = function() {
  img1.style.opacity = ".5";


}
button.onmouseout = function() {
  img1.style.opacity = "1";
} 

button1.onmouseover = function() {
    img2.style.opacity = ".5";
  }
  button1.onmouseout = function() {
    img2.style.opacity = "1";

  } 
  
button2.onmouseover = function() {
    img3.style.opacity = ".5";
  }
  button2.onmouseout = function() {
    img3.style.opacity = "1";
  }
//   advs sectoion



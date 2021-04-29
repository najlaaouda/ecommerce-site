
debugger
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
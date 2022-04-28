let card=document.querySelector(".container");

function showdata([img,product,category,brand,rate,price,offer]){
let code=`
<div class="card">
         <img src="${img}" alt="${product}">
         <div class="text">
             <p class="category">${category}</p>
            
             < a href="google.com"> <p class="name">${brand}</p></a>
             <h5 class="rate">${rate}</h5>
             <p class="price">${price}</p>
             <p class="sale">${offer}</p>
         </div>
     </div>
`;
card.innerHTML+=code;
}
let item1 = ["k552.jpg", "Keyboard", "K552 rgp blue switch ///........../.......................................", "Redragon", "★★★★★","30$","10% off"];
for(let i=0;i<20;i++)
{
    showdata(item1);
}

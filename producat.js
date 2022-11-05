const MainImg = document.getElementById('mainImg');
const SmallImg = document.getElementsByClassName('smallImg');
//const SmallImg = document.getElementsByClassName('smallImg');

//get the start of image with index0 =array then get src of main img and replace smallimg
// face brop;em in this code i want to be more dynamic 
// for(i=0; i<=SmallImg.length ; i++){
// 	SmallImg[0].onclick=function() {
// 	MainImg.src=SmallImg[0].src;
// }
// }
SmallImg[0].onclick= function() {
	MainImg.src=SmallImg[0].src;
}
SmallImg[1].onclick= function() {
	MainImg.src=SmallImg[1].src;
}
SmallImg[2].onclick= function() {
	MainImg.src=SmallImg[2].src;
}
SmallImg[3].onclick= function() {
	MainImg.src=SmallImg[3].src;
}
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".exp");
const links = document.querySelector(".navbar");
navToggle.addEventListener("click",function () {
	linksContainer.classList.toggle("show-exp");
	// body...
});
// display shopping cart
(function (){

	const mediaShopping= document.getElementById('shopping');
	const cartShopping= document.getElementById('shopping-cart');
	const cart = document.getElementById("cart");
	cartShopping.addEventListener("click" , function() {
		cart.classList.toggle('show-cart');

	});
		mediaShopping.addEventListener("click" , function() {
		cart.classList.toggle('show-cart');

	});
})();
//////////////////////////////////////////////////////
(function(){

    const cartBtn = document.querySelectorAll(".normal");
    cartBtn.forEach(function (btn) {
    	btn.addEventListener("click" ,function(event){
    		if(event.target.classList.contains("normal")){
    			// display element 
        let img =document.getElementById('mainImg').src;
        // console.log(img)
        let imgPos=img.indexOf("img") +3;
        let finallImg=img.slice(imgPos)
        //console.log(finallImg);
    		let producatName = event.target.parentElement.children[1].textContent;
    		let price = event.target.parentElement.children[2].textContent;
    		let finalPrice = price.slice(1).trim();
    		//console.log(finalPrice *2);
    		num = document.querySelector('#number');
       	let	outNumber=num.value;
    		let newPrice = outNumber *finalPrice;
    				//display size of seleet 
        selectElement = document.querySelector('#size');
        output = selectElement.value;
//condition if user fire button without choosing size dont sent data 


        if(output=="select size"){
        	alert("pleas choose your size");
        }else{
    const item = {}
         item.image = `img-cart${finallImg}`;
         console.log(item.image);
         item.producat = producatName;
         item.price =newPrice;
         item.size = output;
         item.amount = outNumber;
    console.log(item);
    const cartItem =document.createElement("div");
    cartItem.classList.add('cart-item' );
    cartItem.innerHTML =` 
       <img src="${item.image}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.producat}</p>
              <span id="font">price:</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price} $</span>
              <span id="font">size:</span>
               <span id="cart-item-size" class="cart-item-price" class="mb-0"> ${item.size}  </span>
               <span id="font">amount:</span>
               <span id="cart-item-size" class="cart-item-price" class="mb-0">${item.amount}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
            const cart = document.getElementById('cart');
          const total = document.querySelector('.cart-total-container')
            // console.log(total);
          cart.insertBefore(cartItem,total);
           alert("item added to cart");

        }
    			
    		}
    	});
    	// body...
    });
})();
( function(){

	const shoppinCart =document.querySelectorAll('.cart-shopping');
	shoppinCart.forEach(function(btn){
		btn.addEventListener("click" , function(event) {
      console.log(event.target.parentElement.previousElementSibling.children[1])
			if(event.target.parentElement.classList.contains("cart-shopping")){
				const img = event.target.parentElement.parentElement.children[0].src;
				let imgPos =img.indexOf("img") + 3;
				let finallImg = img.slice(imgPos);
				//name
				let name = event.target.parentElement.previousElementSibling.children[1].textContent;
				let price = event.target.parentElement.previousElementSibling.children[3].textContent;
				const item ={}

			item.img = `img-cart${finallImg}`;
			item.producat = name;
       item.price=price;
				//console.log(item);
				//display 
			const cartItem =document.createElement("div");
    cartItem.classList.add('cart-item' );
    cartItem.innerHTML =` 
       <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
               
              <p id="cart-item-title" class="font-weight-bold mb-0">${item.producat}</p>
              <span id="font">price:</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
               <span id="font">size:</span>
               <span id="cart-item-size" class="cart-item-price" class="mb-0"> miduem </span>
               <span id="font">amount:</span>
               <span id="cart-item-size" class="cart-item-price" class="mb-0">1</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>`;
            const cart = document.getElementById('cart');
          const total = document.querySelector('.cart-total-container')
            // console.log(total);
          cart.insertBefore(cartItem,total);
           alert("item added to cart");

			}

			
		})
	});
})();
(function() {
  var a = b = 5;
})();

console.log(b);


 //     <div class="item">
    //     <img src="${element.image}"      
    //      class="rounded-circle" id="item-img" alt="">
    //     <div class="item-text">
    //     <p id="cart-item-title" >${element.name}</p>
    //     </div>
    //     </div>
    //  <div class="detals-text">
    //     <div class="detals-flex">
    //        <h6 id="font">amount:</h6>
    //        <p id="size" class="cart-item-price" >${element.quntete}</p>
    //        <h6 id="font">price:</h6>
    //        <p id="price" class="cart-item-price" >${element.price} $</p>
    //    </div>
    //    <div class="detals-flex">
    //                <h6 id="font">TotalPrice:</h6>
    //                <p id="totalPrice" class="cart-item-price" >${element.totalPrice} $</p>
    //                <h6 id="font">size:</h6>
    //                <p id="size" class="cart-item-price"> ${element.size}  </p>               
    //               <a href="#" id='cart-item-remove' class="cart-item-remove remove">
    //              <i class="fas fa-trash"></i></a>
    //              </div>
    //              </div>
    //     </div>
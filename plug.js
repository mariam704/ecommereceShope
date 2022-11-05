// change MainImg
const MainImg = document.getElementById('mainImg');
const SmallImg = document.getElementsByClassName('smallImg');
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
//navToggle click-----------------------------------------------------------------
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".exp");
const links = document.querySelector(".navbar");
navToggle.addEventListener("click",function () {
	linksContainer.classList.toggle("show-exp");
	// body...
});
// display shopping cart--------------------------------------------------------------
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
/// disply item to cart and send to local storge-----------------------
    const btn = document.querySelectorAll('.normal');
    const producats = []
    for(let i = 0 ;i < btn.length ;i++){
        let cartBtn = btn[i]
       // console.log(cartBtn)
        cartBtn.addEventListener('click' , () =>{
            // console.log(event.target.parentElement.children[1].textContent)
            let img =document.getElementById('mainImg').src;
            let imgPos=img.indexOf("img") +3;
            let finallImg=img.slice(imgPos);
               //console.log(finallImg);
            let producat={
                name : event.target.parentElement.children[1].textContent,
                image: `img-cart${finallImg}`,
                price : event.target.parentElement.children[2].textContent,
                totalPrice :parseInt(event.target.parentElement.children[2].textContent),
                size : event.target.parentElement.children[3].value,
                quntete:1
            }
            if(producat.size === "select size"){
                alert("please chose youe size")
        }else{
                addToLocal(producat);
                cartNumber(producat);
            }
        })
    }
    //add producat to localstorge
    function addToLocal(producat){
        let cartItem = JSON.parse(localStorage.getItem('producatCart' ))
        //console.log(cartItem)
        if(cartItem ===  null) {
            producats.push(producat)
            localStorage.setItem('producatCart' , JSON.stringify(producats))
            //  console.log(producat)
        }else{
            cartItem.forEach( element => {
                console.log(producat.name)
            
                if(producat.name  == element.name){
                    producat.quntete = element.quntete += 1 ;
                    producat.totalPrice = element.totalPrice += producat.totalPrice ;
                   // console.log('true')
                }else{
                    producats.push(element)
                }
            });
           producats.push(producat);
        }
        localStorage.setItem('producatCart' , JSON.stringify(producats));
      window.location.reload()
    }
    //decress cart numer
    function cartNumberDisplay(){
        let cartNumbers = 0;
        let cartItem = JSON.parse(localStorage.getItem('producatCart'))
        cartItem.forEach(item => {
            cartNumbers = item.quntete += cartNumbers;
        });
        console.log(cartNumbers);
        document.querySelector('.cartBag span').textContent = cartNumbers;
    }
    cartNumberDisplay()
    
  //disply  items to cart
   function displayCart(){
    let html = '';
    let cartItem = JSON.parse(localStorage.getItem('producatCart' ))
    //console.log(cartItem) 
    // null error----------------
     cartItem.forEach(element => {
       // console.log(element)
        html +=  `
        <div class="eachitem">
        <div class="item">
        <img src="${element.image}"      
         class="rounded-circle" id="item-img" alt="">
        <div class="item-text">
        <p id="cart-item-title" >${element.name}</p>
        </div>
        </div>
     <div class="detals-text">
        <div class="detals-flex">
           <h6 id="font">amount:</h6>
           <p id="size" class="cart-item-price quntetee" >${element.quntete}</p>
           <h6 id="font">price:</h6>
           <p id="price" class="cart-item-price" >${element.price} $</p>
       </div>
       <div class="detals-flex">
                   <h6 id="font">TotalPrice:</h6>
                   <p id="totalPrice" class="cart-item-price price" >${element.totalPrice} $</p>
                   <h6 id="font">size:</h6>
                   <p id="size" class="cart-item-price"> ${element.size}  </p>               
                  <a href="#" id='cart-item-remove' class="cart-item-remove">
                 <i class="fas fa-trash"></i></a>
                 </div>
                 </div>
        </div>
        `
    });
    document.querySelector('.cart-item').innerHTML  = html;
   // console.log(html)
   }
   displayCart()
//    const carts = document.querySelectorAll('.addCart');
// //console.log(carts);
// for(let i = 0 ;i < carts.length ;i++ ){
//    // console.log(carts[i]);
//     const item = carts[i];
//     item.addEventListener('click' , () =>{
//        // console.log('added');
//        cartNumber();

//     })
// }
//clear cart button
const clearCart = document.getElementsByClassName('clearBtn');
for(var i = 0; i < clearCart.length; i++){
    let removeBtn = clearCart[i]
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('producatCart'))
        let textName = event.target.parentElement.parentElement.children[1].children[0].textContent ;
    console.log(textName)
        cartItem.forEach(item => {
       console.log(item.name)
if(item.name == textName ){
    console.log('error')
                producats.push(item) 
            }
        });
        localStorage.setItem('producatCart', JSON.stringify(producats))
        window.location.reload()
    })
}
//count total price
 function cartPrice(){
    let subTotal = 0;
    let cartItem = JSON.parse(localStorage.getItem('producatCart'))
    cartItem.map(item =>{
    subTotal = item.totalPrice += subTotal; 
        })
     //console.log(  subTotal);
     document.querySelector('.total h5').textContent = subTotal;
 }
 cartPrice()
//  when remove item - from total price and cart number
let totalpricee = document.querySelector('.price').textContent ;
let fnalprice = (parseInt(totalpricee));

let quntetee =  document.querySelector('.quntetee').textContent
let fnalquntetee = (parseInt(quntetee));
let cartRemove= document.getElementsByClassName('cart-item-remove');
 //console.log(cartRemove)
//loop to enter each cart remove
 for(var i = 0; i < cartRemove.length; i++){
    var button = cartRemove[i]
    button.addEventListener('click', function(event) {
    let buttonClick = event.target
       buttonClick.parentElement.parentElement.parentElement.parentElement.remove();
       localStorage.removeItem('producatCart', JSON.stringify(producats))
        console.log(button)
       // count crt number and total price
        document.querySelector('.cartBag span').textContent -= fnalquntetee ;
        document.querySelector('.total h5').textContent-= fnalprice
       //window.location.reload()
       //i have problem with reload they remove all item from local storge 
    })
 }


















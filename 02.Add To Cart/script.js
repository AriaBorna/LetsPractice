
//check if cart in empty
function checkCartEmpty(){
  let cart = document.querySelector(".products");
  if(cart){
    if(cart.childElementCount === 0 && !cart.querySelector('.empty')){
  
      //creating empty text structure
        //creating div
      let newDiv = document.createElement('div');
      cart.appendChild(newDiv);
      newDiv.classList.add("empty");
    
        //creating p
      let newPtext = document.createElement('p');
      newDiv.appendChild(newPtext);
      newPtext.textContent = "Your cart is empty! Select an item";
      newPtext.classList.add("empty-text");
    }else{ // remove text when its empty again
      let emptyMessage = cart.querySelector('.empty')
      if(emptyMessage){
        emptyMessage.remove()
      }
    }
  }
}

checkCartEmpty() /*current status of cart*/ 

//add & removing product to cart
document.querySelectorAll(".addToCart").forEach(button => {
  button.addEventListener("click", function() {

    //get Item info
    let item = this.closest(".item");
    let image = item.querySelector(".item_image").src;
    let title = item.querySelector(".item_title").textContent;
    let price = item.querySelector(".item_price").textContent;

    //add product to cart
      //create a clone of added item
        //create elements (div/img/p: title-price /remove button)
    let newDiv = document.createElement("div");
    newDiv.classList.add("product");

    let newImg = document.createElement("img");
    newImg.src = image;
    newImg.classList.add("image");

    let newPtitle = document.createElement("p");
    newPtitle.textContent = title;
    newPtitle.classList.add('p_title');

    let newPprice = document.createElement("p");
    newPprice.textContent = price;
    newPprice.classList.add('p_price');

    let newCount = document.createElement("input");
    newCount.type = "number";
    newCount.value = 1;
    newCount.max = 999;
    newCount.classList.add("p_count");

    let newFinalPrice = document.createElement("p");
    let count = parseFloat(newCount.value) ;
    newFinalPrice.textContent = (count * parseFloat(price) + "$" );
    newFinalPrice.classList.add("final_price");
    //check if the count changes
    newCount.addEventListener("input" , function(){
      let updateCount = parseFloat(this.value) || 0 ;
      newFinalPrice.textContent = (updateCount * parseFloat(price) + "$" );
    })

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "&#10008";
    removeButton.classList.add('remove');

    let seperator = document.createElement("hr");

    //currect added elemnts order(in cloned div)
    newDiv.appendChild(newImg);
    newDiv.appendChild(newPtitle);
    newDiv.appendChild(newPprice);
    newDiv.appendChild(newCount);
    newDiv.appendChild(newFinalPrice);
    newDiv.appendChild(removeButton);
    //add cloned div and seperator to cart
    document.querySelector(".products").appendChild(newDiv);
    document.querySelector(".products").appendChild(seperator);

    //removeButton function define
    function removeProduct() {
      let confirmation = confirm("Are you sure you want to remove this item?");
      if (confirmation) {
        newDiv.remove();
        seperator.remove()
        checkCartEmpty() /*update cart status after removing*/
      }
    }

    //removeButton function execution on click
    removeButton.addEventListener("click", removeProduct);

    checkCartEmpty() /*update cart status after adding product*/ 
  });
});


    //futures:
    /* 
    3.change the button text if item is added:
      this.textContent = "Added to Cart";
      this.disabled = true;
    4.final price of all shopping
    5.add number befor each item
    6.local storage
    */
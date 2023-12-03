let shoppingIcon = document.querySelector('.shoppingCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

shoppingIcon.addEventListener('click', () => {
    if (cart.style.right == '-100%') {
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})

close.addEventListener('click', () => {
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

let products = null;

fetch('product.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})

function addDataToHTML() {
    let productsListHTML = document.querySelector('.ourProducts')
    productsListHTML.innerHTML = '';

    if(products != null) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="${product.image}"
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <button onclick="addCart(${product.id})">Add To Cart</button>`;
        productsListHTML.appendChild(newProduct);
        })
    }
}

let listCart = [];











// document.getElementById("order-form").addEventListener("submit", event => {
//     event.preventDefault();

//     let itemName = document.getElementById("item-name").value;
//     let itemQuantity = document.getElementById("item-quantity").value;



//     event.target.reset();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById("inventory-form");
//     const inventoryDisplay = document.querySelector(".inventory-display");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         addInventoryItem();
//     });
// });

// function addInventoryItem() {
//     const name = document.getElementById("name").value;
//     const price = document.getElementById("price").value;
//     const inventoryNumber = document.getElementById("inventoryNumber").value;
//     const inStock = document.getElementById("inStock").checked;

//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("inventory-item");
// }
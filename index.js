document.getElementById("order-form").addEventListener("submit", event => {
    event.preventDefault();

    let itemName = document.getElementById("item-name").value;
    let itemQuantity = document.getElementById("item-quantity").value;



    event.target.reset();
});
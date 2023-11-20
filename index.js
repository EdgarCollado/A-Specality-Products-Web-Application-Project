document.getElementById("order-form").addEventListener("submit", event => {
    event.preventDefault();

    let itemName = document.getElementById("item-name").value;
    let itemQuantity = document.getElementById("item-quantity").value;



    event.target.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("inventory-form");
    const inventoryDisplay = document.querySelector(".inventory-display");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addInventoryItem();
    });
});

function addInventoryItem() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const inventoryNumber = document.getElementById("inventoryNumber").value;
    const inStock = document.getElementById("inStock").checked;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("inventory-item");
}
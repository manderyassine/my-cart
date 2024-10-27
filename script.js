
function updateTotalPrice() {
    let totalPrice = 0;
    const items = document.querySelectorAll('.cart-item');
    
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').innerText, 10);
        const price = parseFloat(item.querySelector('.item-price').innerText.replace('$', ''));
        totalPrice += quantity * price;
    });

    document.querySelector('.total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

// Event listeners for incrementing and decrementing item quantity
document.querySelectorAll('.increment-btn').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.closest('.cart-item').querySelector('.quantity');
        quantityElement.innerText = parseInt(quantityElement.innerText, 10) + 1;
        updateTotalPrice();
    });
});

document.querySelectorAll('.decrement-btn').forEach(button => {
    button.addEventListener('click', function() {
        const quantityElement = this.closest('.cart-item').querySelector('.quantity');
        let quantity = parseInt(quantityElement.innerText, 10);
        if (quantity > 1) {
            quantityElement.innerText = quantity - 1;
            updateTotalPrice();
        }
    });
});

// Event listeners for deleting items from the cart
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.cart-item');
        item.remove();
        updateTotalPrice();
    });
});

// Event listeners for liking items
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

// Initial calculation of total price
updateTotalPrice();

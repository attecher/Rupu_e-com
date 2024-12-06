// Initialize the cart if it doesn't exist
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to add an item to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartDisplay();

    // Show the pop-up notification
    showPopup(name);
}

// Function to update the cart count and show items
function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartCount = document.getElementById('cart-count');
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotal = 0;

    // Update the cart count
    cartCount.textContent = cart.length;

    // Update the cart items list
    cartItemsContainer.innerHTML = '';  // Clear the existing items
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        cartTotal += item.price;
    });

    // Update the total price
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Function to view the cart
function viewCart() {
    document.getElementById('cart').style.display = 'block';
}

// Function to close the cart
function closeCart() {
    document.getElementById('cart').style.display = 'none';
}

// Function to clear the cart
function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartDisplay();
    closeCart();
}

// Function to checkout (just a placeholder)
function checkout() {
    alert('Thank you for your purchase!');
    clearCart();
}

// Function to show the pop-up
function showPopup(itemName) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = `${itemName} added to cart!`;
    
    // Show the pop-up
    popup.classList.add('popup-show');

    // Hide the pop-up after 3 seconds
    setTimeout(function() {
        popup.classList.remove('popup-show');
    }, 3000);
}

updateCartDisplay();  // Initialize cart display

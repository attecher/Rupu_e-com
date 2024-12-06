// Initialize the cart if it doesn't exist
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to add an item to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update the cart count in the header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to view the cart
function viewCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartItemsContainer = document.getElementById('cart-items');
    let cartTotal = 0;
    cartItemsContainer.innerHTML = ''; // Clear the cart items

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        cartTotal += item.price;
    });

    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    document.getElementById('cart').style.display = 'block';
}

// Function to close the cart
function closeCart() {
    document.getElementById('cart').style.display = 'none';
}

// Function to clear the cart
function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
    closeCart();
}

// Function to checkout (just a placeholder)
function checkout() {
    alert('Thank you for your purchase!');
    clearCart();
}

updateCartCount();

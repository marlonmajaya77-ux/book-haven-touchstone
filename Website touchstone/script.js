/* Book Haven Bookstore - Task 3.1 JavaScript */

/* Subscribe button (all pages) */
function subscribeAlert() {
  alert("Thank you for subscribing.");
}

/* Gallery page buttons */
function addToCartAlert() {
  alert("Item added to the cart.");
}

function clearCartAlert() {
  alert("Cart cleared.");
}

function processOrderAlert() {
  alert("Thank you for your order.");
}

/* Contact form submit button */
function submitMessageAlert() {
  alert("Thank you for your message.");
}


/* ===== SHOPPING CART USING sessionStorage ===== */

// Add item to cart
function addToCart(itemName) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(itemName);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to the cart.");
}

// View cart
function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Items in your cart:\n" + cart.join(", "));
  }
}

// Clear cart
function clearCart() {
  sessionStorage.clear();
  alert("Cart cleared.");
}

// Process order
function processOrder() {
  sessionStorage.clear();
  alert("Thank you for your order.");
}

/* ===== CUSTOM ORDER USING localStorage ===== */

function saveCustomOrder() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let order = {
    customerName: name,
    customerEmail: email,
    customerMessage: message
  };

  localStorage.setItem("customOrder", JSON.stringify(order));

  alert("Thank you for your message.");
}

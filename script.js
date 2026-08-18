const products = [
  { id: 1, name: "Wireless Keyboard", price: 1499 },
  { id: 2, name: "Wireless Mouse", price: 799 },
  { id: 3, name: "USB-C Headphones", price: 1999 },
  { id: 4, name: "Laptop Stand", price: 1299 },
  { id: 5, name: "Bluetooth Speaker", price: 2499 },
  { id: 6, name: "Webcam", price: 1799 }
];

let cart = [];

const productList = document.getElementById("productList");
const search = document.getElementById("search");

function displayProducts(list = products) {
  productList.innerHTML = "";
  if (!list.length) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  list.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  if (!cart.length) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      cartItems.innerHTML += `
        <div class="cart-row">
          <span>${item.name} - ₹${item.price}</span>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cartTotal").textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  displayProducts(products.filter(p => p.name.toLowerCase().includes(value)));
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  // Intentionally simple demo login behavior for testing practice.
  // This can contain defects that we will discover during testing.
  if (username === "admin" && password === "admin123") {
    message.textContent = "Login successful!";
  } else if (username === "" && password === "") {
    message.textContent = "Login successful!";
  } else {
    message.textContent = "Invalid username or password.";
  }
});

document.getElementById("checkoutBtn").addEventListener("click", function() {
  const message = document.getElementById("checkoutMessage");

  if (cart.length === 0) {
    message.textContent = "Please add products before checkout.";
  } else {
    message.textContent = "Checkout initiated successfully.";
  }
});

displayProducts();
updateCart();

const products = [
  { id: 1, name: "Everyday Tote", category: "Fashion", price: 1899, icon: "👜", color: "fashion", description: "A roomy everyday carryall with a clean, classic finish." },
  { id: 2, name: "Cloud Cushion", category: "Home", price: 1199, icon: "🛋️", color: "home", description: "Soft comfort and a relaxed texture for your favourite corner." },
  { id: 3, name: "Sound Mini", category: "Tech", price: 2499, icon: "🎧", color: "tech", description: "Compact wireless sound for work, travel, and everyday listening." },
  { id: 4, name: "Weekend Cap", category: "Fashion", price: 799, icon: "🧢", color: "fashion", description: "A lightweight cap that finishes casual outfits with ease." },
  { id: 5, name: "Ceramic Mug", category: "Home", price: 649, icon: "☕", color: "home", description: "A sturdy, hand-feel mug for tea, coffee, and quiet mornings." },
  { id: 6, name: "Smart Watch", category: "Tech", price: 6999, icon: "⌚", color: "tech", description: "Stay on top of your day with activity and notification tracking." },
  { id: 7, name: "Linen Throw", category: "Home", price: 1599, icon: "🧶", color: "home", description: "An airy layer for sofas, beds, and slower weekends at home." },
  { id: 8, name: "Classic Sneakers", category: "Fashion", price: 3299, icon: "👟", color: "fashion", description: "Comfortable everyday sneakers with a versatile, timeless look." }
];

let selectedCategory = "All";
let selectedQuantities = {};
let cart = JSON.parse(localStorage.getItem("shopEasyCart") || "[]").map(item => {
  const product = products.find(product => product.id === item.id);
  return product ? { ...product, quantity: item.quantity } : null;
}).filter(Boolean);
let wishlist = JSON.parse(localStorage.getItem("shopEasyWishlist") || "[]").map(item => products.find(product => product.id === item.id)).filter(Boolean);
const productGrid = document.getElementById("productGrid");
const resultMessage = document.getElementById("resultMessage");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");
const wishlistPanel = document.getElementById("wishlistPanel");
const wishlistItems = document.getElementById("wishlistItems");
const wishlistCount = document.getElementById("wishlistCount");
const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const authScreen = document.getElementById("authScreen");
const appShell = document.getElementById("appShell");

function showAuthView(view) {
  document.getElementById("registerForm").hidden = view !== "register";
  document.getElementById("loginForm").hidden = view !== "login";
}
function enterStore() {
  authScreen.hidden = true;
  appShell.hidden = false;
  sessionStorage.setItem("shopEasySignedIn", "true");
  window.scrollTo(0, 0);
}
function leaveStore() {
  sessionStorage.removeItem("shopEasySignedIn");
  sessionStorage.removeItem("shopEasyActiveEmail");
  setCartOpen(false);
  appShell.hidden = true;
  authScreen.hidden = false;
  showAuthView("login");
  document.getElementById("loginMessage").textContent = "You have been signed out.";
}

function renderProducts() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const filtered = products.filter(product =>
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(query)
  );
  resultMessage.textContent = query ? `${filtered.length} product${filtered.length === 1 ? "" : "s"} found for “${query}”` : "";
  productGrid.innerHTML = filtered.length ? filtered.map(product => {
    const quantity = selectedQuantities[product.id] || 1;
    const wished = wishlist.some(item => item.id === product.id);
    return `<article class="product-card">
      <div class="product-image ${product.color}"><span>${product.icon}</span><button class="heart-button ${wished ? "active" : ""}" data-wishlist-id="${product.id}" aria-label="${wished ? "Remove" : "Add"} ${product.name} ${wished ? "from" : "to"} wishlist">${wished ? "♥" : "♡"}</button></div>
      <div class="product-info"><span class="product-category">${product.category}</span><h3 class="product-name">${product.name}</h3><p class="product-description">${product.description}</p>
        <div class="product-bottom"><span class="price">${money.format(product.price)}</span></div>
        <div class="card-actions"><div class="product-quantity" aria-label="Quantity for ${product.name}"><button data-product-quantity="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button><span>${quantity}</span><button data-product-quantity="increase" data-id="${product.id}" aria-label="Increase quantity">+</button></div><button class="primary-button add-to-cart" data-id="${product.id}">Add to cart</button></div>
      </div>
    </article>`;
  }).join("") : `<p>No products match your search. Try another keyword.</p>`;
}

function saveCart() { localStorage.setItem("shopEasyCart", JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem("shopEasyWishlist", JSON.stringify(wishlist)); }
function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = totalItems;
  cartTotal.textContent = money.format(total);
  checkoutButton.disabled = cart.length === 0;
  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item"><div class="product-image ${item.color}"><span>${item.icon}</span></div>
      <div><h3>${item.name}</h3><p>${money.format(item.price)} each</p><div class="quantity"><button data-action="decrease" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">−</button><span>${item.quantity}</span><button data-action="increase" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button></div></div>
      <button class="icon-button remove-item" data-action="remove" data-id="${item.id}" aria-label="Remove ${item.name}">×</button></div>`).join("") : `<p class="empty-cart">Your cart is empty.<br />Add something you love.</p>`;
}
function renderWishlist() {
  wishlistCount.textContent = wishlist.length;
  wishlistItems.innerHTML = wishlist.length ? wishlist.map(item => `
    <div class="cart-item"><div class="product-image ${item.color}"><span>${item.icon}</span></div>
      <div><h3>${item.name}</h3><p>${item.description}</p><strong>${money.format(item.price)}</strong></div>
      <div class="wishlist-actions"><button data-wishlist-action="move" data-id="${item.id}">Add to cart</button><button data-wishlist-action="remove" data-id="${item.id}">Remove</button></div>
    </div>`).join("") : `<p class="empty-cart">Your wishlist is empty.<br />Tap ♡ on any product to save it.</p>`;
}
function addToCart(id, quantity = selectedQuantities[id] || 1) {
  const product = products.find(product => product.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += quantity; else cart.push({ ...product, quantity });
  selectedQuantities[id] = 1;
  saveCart(); renderCart(); renderProducts(); showToast(`${product.name} added to cart`);
}
function updateQuantity(id, action) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  if (action === "increase") item.quantity += 1;
  if (action === "decrease") item.quantity -= 1;
  if (action === "remove" || item.quantity === 0) cart = cart.filter(item => item.id !== id);
  saveCart(); renderCart();
}
function updateProductQuantity(id, action) {
  const current = selectedQuantities[id] || 1;
  selectedQuantities[id] = action === "increase" ? current + 1 : Math.max(1, current - 1);
  renderProducts();
}
function toggleWishlist(id) {
  const item = products.find(product => product.id === id);
  if (wishlist.some(product => product.id === id)) {
    wishlist = wishlist.filter(product => product.id !== id);
    showToast(`${item.name} removed from wishlist`);
  } else {
    wishlist.push(item);
    showToast(`${item.name} saved to wishlist`);
  }
  saveWishlist(); renderWishlist(); renderProducts();
}
function updateWishlist(id, action) {
  if (action === "move") { addToCart(id, 1); showToast("Item moved to your cart"); }
  wishlist = wishlist.filter(item => item.id !== id);
  saveWishlist(); renderWishlist(); renderProducts();
}
function setCartOpen(open) {
  if (open) setWishlistOpen(false);
  cartPanel.classList.toggle("open", open); overlay.classList.toggle("visible", open);
  cartPanel.setAttribute("aria-hidden", String(!open));
}
function setWishlistOpen(open) {
  if (open) { cartPanel.classList.remove("open"); cartPanel.setAttribute("aria-hidden", "true"); }
  wishlistPanel.classList.toggle("open", open); overlay.classList.toggle("visible", open);
  wishlistPanel.setAttribute("aria-hidden", String(!open));
}
let toastTimer;
function showToast(message) { const toast = document.getElementById("toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2500); }

document.getElementById("searchInput").addEventListener("input", renderProducts);
document.querySelectorAll("[data-auth-view]").forEach(button => button.addEventListener("click", () => showAuthView(button.dataset.authView)));
document.getElementById("registerForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById("registerMessage");
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;
  if (!form.checkValidity()) { message.textContent = "Please complete every required field."; form.reportValidity(); return; }
  if (password !== document.getElementById("confirmPassword").value) { message.textContent = "Passwords do not match."; return; }
  const users = JSON.parse(localStorage.getItem("shopEasyUsers") || "[]");
  if (users.some(user => user.email === email)) { message.textContent = "This email is already registered. Please sign in."; return; }
  users.push({ name: document.getElementById("registerName").value.trim(), email, password });
  localStorage.setItem("shopEasyUsers", JSON.stringify(users));
  document.getElementById("loginEmail").value = email;
  document.getElementById("loginMessage").textContent = "Registration successful. Please sign in.";
  form.reset(); showAuthView("login");
});
document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById("loginMessage");
  if (!form.checkValidity()) { message.textContent = "Enter a valid email and password."; form.reportValidity(); return; }
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const users = JSON.parse(localStorage.getItem("shopEasyUsers") || "[]");
  if (!users.some(user => user.email === email && user.password === password)) { message.textContent = "Incorrect email or password."; return; }
  sessionStorage.setItem("shopEasyActiveEmail", email);
  form.reset(); message.textContent = ""; enterStore();
});
document.getElementById("logoutButton").addEventListener("click", leaveStore);
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => { selectedCategory = button.dataset.category; document.querySelector(".filter.active").classList.remove("active"); button.classList.add("active"); renderProducts(); }));
productGrid.addEventListener("click", event => {
  const cartButton = event.target.closest(".add-to-cart");
  const quantityButton = event.target.closest("button[data-product-quantity]");
  const wishlistButton = event.target.closest("button[data-wishlist-id]");
  if (cartButton) addToCart(Number(cartButton.dataset.id));
  if (quantityButton) updateProductQuantity(Number(quantityButton.dataset.id), quantityButton.dataset.productQuantity);
  if (wishlistButton) toggleWishlist(Number(wishlistButton.dataset.wishlistId));
});
document.getElementById("cartButton").addEventListener("click", () => setCartOpen(true));
document.getElementById("closeCart").addEventListener("click", () => setCartOpen(false));
document.getElementById("wishlistButton").addEventListener("click", () => setWishlistOpen(true));
document.getElementById("closeWishlist").addEventListener("click", () => setWishlistOpen(false));
overlay.addEventListener("click", () => { setCartOpen(false); setWishlistOpen(false); });
cartItems.addEventListener("click", event => { const button = event.target.closest("button[data-action]"); if (button) updateQuantity(Number(button.dataset.id), button.dataset.action); });
wishlistItems.addEventListener("click", event => { const button = event.target.closest("button[data-wishlist-action]"); if (button) updateWishlist(Number(button.dataset.id), button.dataset.wishlistAction); });
document.getElementById("menuButton").addEventListener("click", event => { const open = document.getElementById("mainNav").classList.toggle("open"); event.currentTarget.setAttribute("aria-expanded", String(open)); });
document.getElementById("newsletterForm").addEventListener("submit", event => { event.preventDefault(); const email = document.getElementById("emailInput"); const message = document.getElementById("emailMessage"); if (!email.validity.valid) { message.textContent = "Please enter a valid email address."; return; } message.textContent = "Thanks! You’re on the list."; event.currentTarget.reset(); });
const profileDialog = document.getElementById("profileDialog");
function openProfile() {
  const activeEmail = sessionStorage.getItem("shopEasyActiveEmail");
  const users = JSON.parse(localStorage.getItem("shopEasyUsers") || "[]");
  const user = users.find(user => user.email === activeEmail);
  if (!user) { leaveStore(); return; }
  document.getElementById("profileName").value = user.name;
  document.getElementById("profileEmail").value = user.email;
  document.getElementById("profileMessage").textContent = "";
  profileDialog.showModal();
}
document.getElementById("profileButton").addEventListener("click", openProfile);
document.getElementById("closeProfile").addEventListener("click", () => profileDialog.close());
document.getElementById("profileForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById("profileMessage");
  if (!form.checkValidity()) { message.textContent = "Enter a valid name and email address."; form.reportValidity(); return; }
  const activeEmail = sessionStorage.getItem("shopEasyActiveEmail");
  const name = document.getElementById("profileName").value.trim();
  const email = document.getElementById("profileEmail").value.trim().toLowerCase();
  const users = JSON.parse(localStorage.getItem("shopEasyUsers") || "[]");
  if (email !== activeEmail && users.some(user => user.email === email)) { message.textContent = "That email is already in use."; return; }
  localStorage.setItem("shopEasyUsers", JSON.stringify(users.map(user => user.email === activeEmail ? { ...user, name, email } : user)));
  sessionStorage.setItem("shopEasyActiveEmail", email);
  message.textContent = "Profile updated successfully.";
});
const checkoutDialog = document.getElementById("checkoutDialog");
checkoutButton.addEventListener("click", () => { setCartOpen(false); checkoutDialog.showModal(); });
document.getElementById("closeDialog").addEventListener("click", () => checkoutDialog.close());
function setPaymentFields() {
  const method = document.querySelector('input[name="payment"]:checked').value;
  const isCard = method === "Card";
  const isUpi = method === "UPI";
  document.getElementById("cardFields").hidden = !isCard;
  document.getElementById("upiFields").hidden = !isUpi;
  document.getElementById("cardNumber").required = isCard;
  document.getElementById("cardExpiry").required = isCard;
  document.getElementById("cardCvv").required = isCard;
  document.getElementById("upiId").required = isUpi;
}
document.querySelectorAll('input[name="payment"]').forEach(input => input.addEventListener("change", setPaymentFields));
document.getElementById("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById("checkoutMessage");
  if (!form.checkValidity()) { message.textContent = "Please complete all fields with valid information."; form.reportValidity(); return; }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const method = document.querySelector('input[name="payment"]:checked').value;
  cart = []; saveCart(); renderCart(); form.reset(); setPaymentFields();
  message.textContent = `Order for ${money.format(total)} placed with ${method}. Thank you!`;
  setTimeout(() => checkoutDialog.close(), 1800);
});

renderProducts(); renderCart(); renderWishlist(); setPaymentFields();
if (sessionStorage.getItem("shopEasySignedIn") === "true" && sessionStorage.getItem("shopEasyActiveEmail")) enterStore();

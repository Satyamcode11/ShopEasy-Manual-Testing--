# Test Scenario -  Registration

TS-REG-001 - Verify that a new user can register with valid information.
TS-REG-002 - Verify registration with an already registered email address.
TS-REG-003 - Verify registration with an invalid email address.
TS-REG-004 - Verify registration with an empty email address.
TS-REG-005 - Verify registration with an invalid name.
TS-REG-006 - Verify registration with an invalid phone number.
TS-REG-007 - Verify registration with an invalid password.
TS-REG-008 - Verify registration when password and confirm password do not match.
TS-REG-009 - Verify registration with matching password and confirm password.
TS-REG-010 - Verify registration using boundary-length values in input fields.
TS-REG-011 - Verify that the user receives appropriate validation messages for invalid input.
TS-REG-012 - Verify that the user receives confirmation after successful registration.
TS-REG-013 - Verify that the newly registered user can log in using the registered credentials.

 
# Test Scenario - LOGIN

TS-LOGIN-001 -  Verify login with valid username/email and password.
TS-LOGIN-002 -  Verify login with an invalid username/email.
TS-LOGIN-003 -  Verify login with an invalid password.
TS-LOGIN-004 -  Verify login with both username/email and password invalid.
TS-LOGIN-005 -  Verify login with empty username/email.
TS-LOGIN-006 -  Verify login with empty password.
TS-LOGIN-007 -  Verify login with both fields empty.
TS-LOGIN-008 -  Verify password field is masked.
TS-LOGIN-009 -  Verify appropriate validation/error message is displayed for invalid credentials.
TS-LOGIN-0010 -  Verify successful login redirects the user to the appropriate page.
TS-LOGIN-0011 -  Verify login with leading/trailing spaces in the username/email.
TS-LOGIN-0012 -  Verify the user cannot access protected pages without logging in.

# Test Scenario - Home Page

TS-HOME-001 — Verify that the Home Page is displayed successfully after login.
TS-HOME-002 — Verify that the ShopEasy logo is displayed on the Home Page.
TS-HOME-003 — Verify that the navigation menu is displayed on the Home Page.
TS-HOME-004 — Verify that the Search bar is displayed on the Home Page.
TS-HOME-005 — Verify that the product categories are displayed on the Home Page.
TS-HOME-006 — Verify that the products are displayed on the Home Page.
TS-HOME-007 — Verify that the product image, name and price are displayed correctly.
TS-HOME-008 — Verify that the Add to Cart button is displayed for available products.
TS-HOME-009 — Verify that the Cart icon is displayed on the Home Page.
TS-HOME-010 — Verify that the user can navigate to the Cart page by clicking the Cart icon.
TS-HOME-011 — Verify that the Logout option is displayed on the Home Page.
TS-HOME-012 — Verify that the user can successfully logout from the application. 

# Test Scenario - Product Search

TS-SEARCH-001 — Verify that the Search bar is displayed on the Home Page.
TS-SEARCH-002 — Verify that the user can search for a product using a valid product name.
TS-SEARCH-003 — Verify that the search works when the user enters a product name.
TS-SEARCH-004 — Verify that the search is case-insensitive.
TS-SEARCH-005 — Verify that an appropriate message is displayed when no product matches the search keyword.
TS-SEARCH-006 — Verify that the user can search for a product using numbers or special characters where applicable.
TS-SEARCH-007 — Verify that the search results display the correct product name, image, and price.
TS-SEARCH-008 — Verify that the user can open the product details by clicking a product from the search results.
TS-SEARCH-009 — Verify that the search results are updated when the user performs a new search.
TS-SEARCH-010 — Verify that leading and trailing spaces in the search keyword are handled appropriately.

# Test Sceanrio - View Product Details

TS-PRODUCT-001 — Verify that the Product Details page is displayed when the user selects a product.
TS-PRODUCT-002 — Verify that the correct product name is displayed on the Product Details page.
TS-PRODUCT-003 — Verify that the correct product image is displayed on the Product Details page.
TS-PRODUCT-004 — Verify that the correct product price is displayed on the Product Details page.
TS-PRODUCT-005 — Verify that the product description is displayed on the Product Details page.
TS-PRODUCT-006 — Verify that the product category is displayed correctly.
TS-PRODUCT-007 — Verify that the product availability status is displayed correctly.
TS-PRODUCT-008 — Verify that the Add to Cart button is displayed on the Product Details page.
TS-PRODUCT-009 — Verify that the user can add the selected product to the cart from the Product Details page.
TS-PRODUCT-010 — Verify that the selected product is added to the cart with the correct details.


# Test Sceanrio - ADD To Cart

TS-CART-001 — Verify that the Add to Cart button is displayed for an available product.
TS-CART-002 — Verify that the user can add a product to the cart successfully.
TS-CART-003 — Verify that the correct product is added to the cart.
TS-CART-004 — Verify that the product name is displayed correctly in the cart.
TS-CART-005 — Verify that the product price is displayed correctly in the cart.
TS-CART-006 — Verify that the product quantity is displayed correctly after adding it to the cart.
TS-CART-007 — Verify that the cart count is updated after adding a product.
TS-CART-008 — Verify that the user can add multiple different products to the cart.
TS-CART-009 — Verify that the user cannot add an unavailable or out-of-stock product to the cart.
TS-CART-010 — Verify that adding the same product multiple times.
TS-CART-011 — Verify that the user can navigate to the Cart page after adding a product.

# Test Scenario - Cart Management

TS-CART-001 — Verify that the Cart page is displayed when the user clicks the Cart icon.
TS-CART-002 — Verify that the cart displays the products added by the user.
TS-CART-003 — Verify that the correct product name is displayed in the cart.
TS-CART-004 — Verify that the correct product price is displayed in the cart.
TS-CART-005 — Verify that the product quantity is displayed correctly in the cart.
TS-CART-006 — Verify that the user can increase the quantity of a product in the cart.
TS-CART-007 — Verify that the user can decrease the quantity of a product in the cart.
TS-CART-008 — Verify that the total price is updated correctly when the product quantity is changed.
TS-CART-009 — Verify that the user can remove a product from the cart.
TS-CART-010 — Verify that the cart total is updated correctly after removing a product.
TS-CART-011 — Verify that an appropriate message is displayed when the cart is empty.
TS-CART-012 — Verify that the user can continue shopping from the Cart page.
TS-CART-013 — Verify that the user can proceed to checkout from the Cart page.

# Test Scenario - Add Product to Wishlist

TS-WISHLIST-001 — Verify that the Wishlist option is displayed for an available product.
TS-WISHLIST-002 — Verify that the user can add a product to the Wishlist successfully.
TS-WISHLIST-003 — Verify that the correct product is added to the Wishlist.
TS-WISHLIST-004 — Verify that the Wishlist count is updated after adding a product.
TS-WISHLIST-005 — Verify that the user can view the added product in the Wishlist.
TS-WISHLIST-006 — Verify that the Wishlist displays the correct product name, image, and price.
TS-WISHLIST-007 — Verify that the user can add multiple products to the Wishlist.
TS-WISHLIST-008 — Verify that the same product cannot be added to the Wishlist more than once.
TS-WISHLIST-009 — Verify that the user can remove a product from the Wishlist.
TS-WISHLIST-010 — Verify that the Wishlist count is updated after removing a product.
TS-WISHLIST-011 — Verify that an appropriate message is displayed when the Wishlist is empty.


# Test Scenario - Manage Address

TS-ADDRESS-001 — Verify that the user can navigate to the Manage Address section.
TS-ADDRESS-002 — Verify that the Manage Address page displays the user's saved addresses.
TS-ADDRESS-003 — Verify that the user can add a new address successfully.
TS-ADDRESS-004 — Verify that all mandatory fields are validated when adding a new address.
TS-ADDRESS-005 — Verify that the user can save an address with valid details.
TS-ADDRESS-006 — Verify that the saved address is displayed correctly in the address list.
TS-ADDRESS-007 — Verify that the user can edit an existing address.
TS-ADDRESS-008 — Verify that the updated address details are saved correctly.
TS-ADDRESS-009 — Verify that the user can delete an existing address.
TS-ADDRESS-010 — Verify that a confirmation is displayed before deleting an address.
TS-ADDRESS-011 — Verify that the user cannot save an address when mandatory fields are left empty.
TS-ADDRESS-012 — Verify that invalid input values are rejected in the address fields.
TS-ADDRESS-013 — Verify that the user can select a saved address during checkout.
TS-ADDRESS-014 — Verify that the selected address is displayed correctly during the checkout process.


# Test Scenario - Chechout

TS-CHECKOUT-001 — Verify that the user can navigate to the Checkout page from the Cart.
TS-CHECKOUT-002 — Verify that the Checkout page displays the selected products.
TS-CHECKOUT-003 — Verify that the product name is displayed correctly on the Checkout page.
TS-CHECKOUT-004 — Verify that the product quantity is displayed correctly on the Checkout page.
TS-CHECKOUT-005 — Verify that the product price is displayed correctly on the Checkout page.
TS-CHECKOUT-006 — Verify that the total order amount is calculated correctly.
TS-CHECKOUT-007 — Verify that the user can select a saved delivery address.
TS-CHECKOUT-008 — Verify that the user can add a new delivery address during checkout, if applicable.
TS-CHECKOUT-009 — Verify that the selected delivery address is displayed correctly.
TS-CHECKOUT-010 — Verify that the available payment methods are displayed.
TS-CHECKOUT-011 — Verify that the user can select a valid payment method.
TS-CHECKOUT-012 — Verify that the user cannot proceed with checkout without selecting a required delivery address.
TS-CHECKOUT-013 — Verify that the user cannot proceed with checkout without selecting a required payment method.
TS-CHECKOUT-014 — Verify that the user can proceed to place the order after providing all required information.


# Test Scenario - Payment

TS-PAYMENT-001 — Verify that the Payment page is displayed when the user proceeds from Checkout.
TS-PAYMENT-002 — Verify that the available payment methods are displayed correctly.
TS-PAYMENT-003 — Verify that the user can select a valid payment method.
TS-PAYMENT-004 — Verify that the user can make a payment using valid card details.
TS-PAYMENT-005 — Verify that invalid card details are rejected.
TS-PAYMENT-006 — Verify that an appropriate validation message is displayed for invalid payment details.
TS-PAYMENT-007— Verify that the user cannot proceed with payment without selecting a payment method.
TS-PAYMENT-008— Verify that the order amount displayed on the Payment page matches the Checkout total.
TS-PAYMENT-009— Verify that the payment is processed successfully with valid payment details.
TS-PAYMENT-010 — Verify that an appropriate message is displayed when the payment fails.
TS-PAYMENT-011 — Verify that the user is not charged multiple times when the payment is submitted only once.
TS-PAYMENT-012 — Verify that the user is redirected to the appropriate page after successful payment.
TS-PAYMENT-013 — Verify that the payment status is seen correctly after a successful transaction.


# Test Scenario - Order Confirmation

TS-ORDER-001 — Verify that the Order Confirmation page is displayed after successful order placement.
TS-ORDER-002 — Verify that a successful order confirmation message is displayed.
TS-ORDER-003 — Verify that a unique order ID is generated for the placed order.
TS-ORDER-004 — Verify that the correct order date and time are displayed.
TS-ORDER-005 — Verify that the ordered products are displayed correctly.
TS-ORDER-006 — Verify that the ordered product quantities are displayed correctly.
TS-ORDER-007 — Verify that the product prices are displayed correctly.
TS-ORDER-008 — Verify that the total order amount is displayed correctly.
TS-ORDER-009 — Verify that the selected delivery address is displayed correctly.
TS-ORDER-010 — Verify that the selected payment method is displayed correctly.
TS-ORDER-011 — Verify that the order status is displayed correctly after successful order placement.



# Test Scenario - Profile Management

TS-PROFILE-001 — Verify that the user can navigate to the Profile section.
TS-PROFILE-002 — Verify that the Profile page displays the user's existing profile information.
TS-PROFILE-003 — Verify that the user's name is displayed correctly in the Profile section.
TS-PROFILE-004 — Verify that the user's email address is displayed correctly.
TS-PROFILE-005 — Verify that the user can edit their profile information.
TS-PROFILE-006 — Verify that the user can save valid updated profile information.
TS-PROFILE-007 — Verify that the updated profile information is displayed correctly after saving.
TS-PROFILE-008 — Verify that mandatory profile fields are validated when left empty.
TS-PROFILE-009 — Verify that the user can change their password from the Profile section.
TS-PROFILE-010 — Verify that the new password is updated successfully when valid password details are provided.



# Test Scenario - Log Out

TS-LOGOUT-001 — Verify that the Logout option is displayed for a logged-in user.
TS-LOGOUT-002 — Verify that the user can successfully log out from the application.
TS-LOGOUT-003 — Verify that the user is redirected to the Login page after logout.
TS-LOGOUT-004 — Verify that the user session is terminated after logout.
TS-LOGOUT-005 — Verify that the user cannot access authenticated pages using the browser after logout.
TS-LOGOUT-006 — Verify that the user can log in successfully again after logout using valid credentials.




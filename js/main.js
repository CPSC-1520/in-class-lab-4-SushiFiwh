
// Enter your code below.

const formElement = document.querySelector("#new-order-form");

formElement.addEventListener('submit', (e) => {

    e.preventDefault();
    
    let itemName = e.target.elements["order-item-name"].value;
    let itemPrice = e.target.elements["order-item-price"].value;
    let itemSize = e.target.elements["order-size"].value;

    let formIsValid = true;

    // Validate item name
    if (isValueNotEmpty(itemName)) {
        e.target.elements["order-item-name"].classList.remove("is-invalid");
    } else {
        e.target.elements["order-item-name"].classList.add("is-invalid");
        formIsValid = false;
    }

    // Validate item price
    if (isValueNotEmpty(itemPrice) && isGreaterThanFive(itemPrice)) {
        e.target.elements["order-item-price"].classList.remove("is-invalid");
    } else {
        e.target.elements["order-item-price"].classList.add("is-invalid");
        formIsValid = false;
    }

    // Validate item size
    if (isValueNotEmpty(itemSize)) {
        e.target.elements["order-size"].classList.remove("is-invalid");
    } else {
        e.target.elements["order-size"].classList.add("is-invalid");
        formIsValid = false;
    }

    // Add item to the order list if form is valid
    if (formIsValid) {
        addOrderItem(itemName, itemPrice, itemSize);
    }

    // Reset the form fields
    e.target.elements["order-item-name"].value = "";
    e.target.elements["order-item-price"].value = "";
    e.target.elements["order-size"].value = "";

});


// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}

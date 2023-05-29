// Function to update an order
async function updateOrder(orderId) {
  const nameInput = document.getElementById("name");
  const pizzaInput = document.getElementById("pizza");
  const addressInput = document.getElementById("address");

  const order = {
    orderName: nameInput.value,
    uid: orderId,
    pizzaType: pizzaInput.value,
    address: addressInput.value,
  };

  await fetch(`https://playgroundproject.duckdns.org/api/pizza/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });

  populateTable();
  clearInputFields();
}

// Function to populate the table with orders from the backend
async function populateTable() {
  const response = await fetch('https://playgroundproject.duckdns.org/api/pizza/');
  const orders = await response.json();

  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // Clear existing rows

  orders.forEach((order) => {
    const newRow = createTableRow(order);
    tbody.appendChild(newRow);
  });
}

// Function to handle the "Update" button click event
function updateOrderButton() {
  const updateButton = document.getElementById("updateButton");
  const orderId = updateButton.dataset.orderId;
  updateOrder(orderId);
}

// Function to handle the "Delete" button click event
async function deleteOrder(orderId) {
  const deleteRequestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  
  await fetch(`https://playgroundproject.duckdns.org/api/pizza/${orderId}`, deleteRequestOptions);
  if (confirm("Are you sure you want to delete this order?")) {
    await fetch(`https://playgroundproject.duckdns.org/api/pizza/${orderId}`, {
      method: 'DELETE'
    });

    populateTable();
  }
}

// Function to create the table row for an order
function createTableRow(order) {
  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  const pizzaCell = document.createElement("td");
  const addressCell = document.createElement("td");
  const deleteCell = document.createElement("td");
  const updateCell = document.createElement("td");

  nameCell.textContent = order.orderName; // Update here
  pizzaCell.textContent = order.pizzaType;
  addressCell.textContent = order.address;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = () => {
    deleteOrder(order.uid);
  };
  deleteCell.appendChild(deleteButton);

  const updateButton = document.createElement("button");
  updateButton.innerHTML = "Update";
  updateButton.onclick = () => {
    populateInputFields(order);
  };
  updateCell.appendChild(updateButton);

  newRow.appendChild(nameCell);
  newRow.appendChild(pizzaCell);
  newRow.appendChild(addressCell);
  newRow.appendChild(deleteCell);
  newRow.appendChild(updateCell);

  return newRow;
}

// Function to handle the "Order" button click event
async function addOrder() {
  const nameInput = document.getElementById("name");
  const pizzaInput = document.getElementById("pizza");
  const addressInput = document.getElementById("address");

  const order = {
    orderName: nameInput.value,
    uid: 0,
    pizzaType: pizzaInput.value,
    address: addressInput.value,
  };

  await fetch('https://playgroundproject.duckdns.org/api/pizza/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });

  populateTable();
  clearInputFields();
}

// Function to

// Function to clear input fields after adding or updating an order
function clearInputFields() {
  document.getElementById("name").value = "";
  document.getElementById("pizza").value = "";
  document.getElementById("address").value = "";
}

// Populate the table with orders on page load
populateTable();

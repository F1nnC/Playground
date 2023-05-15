<h1>Order Table</h1>
<table class="Ptable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Pizza</th>
      <th>Address</th>
      <th>Order</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input id="name" placeholder="Name"></td>
      <td><input id="pizza" placeholder="Pizza"></td>
      <td><input id="address" placeholder="Address"></td>
      <td><button onclick="addOrder()">Order</button></td>
      <td><button onclick="updateOrder()">Update</button></td>
    </tr>
  </tbody>
</table>

<br>

<h1>Outgoing Orders</h1>

<table class="Ptable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Pizza</th>
      <th>Address</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table>

<script>
  // Sample orders
  const sampleOrders = [
    { name: "John", pizza: "Margherita", address: "123 Main St" },
    { name: "Sarah", pizza: "Pepperoni", address: "456 Elm St" },
    { name: "Michael", pizza: "Supreme", address: "789 Oak St" }
  ];

  // Get table elements
  const nameInput = document.getElementById("name");
  const pizzaInput = document.getElementById("pizza");
  const addressInput = document.getElementById("address");
  const tbody = document.getElementById("tbody");

  // Function to populate the table with sample orders
  function populateTable() {
    for (let i = 0; i < sampleOrders.length; i++) {
      const order = sampleOrders[i];
      const newRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      const pizzaCell = document.createElement("td");
      const addressCell = document.createElement("td");
      const deleteCell = document.createElement("td");

      nameCell.textContent = order.name;
      pizzaCell.textContent = order.pizza;
      addressCell.textContent = order.address;

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = () => {
        tbody.removeChild(newRow);
      };
      deleteCell.appendChild(deleteButton);

      newRow.appendChild(nameCell);
      newRow.appendChild(pizzaCell);
      newRow.appendChild(addressCell);
      newRow.appendChild(deleteCell);

      tbody.appendChild(newRow);
    }
  }
  // Function to add an order
  function addOrder() {
    const name = nameInput.value;
    const pizza = pizzaInput.value;
    const address = addressInput.value;

    // Check if the name already exists in the table
    const existingRow = Array.from(tbody.getElementsByTagName("tr")).find(
      (row) => row.cells[0].textContent === name
    );

    if (existingRow) {
      // Update address and pizza for existing name
      existingRow.cells[2].textContent = address;
      existingRow.cells[1].textContent = pizza;
    } else {
      // Create a new row
      const newRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      const pizzaCell = document.createElement("td");
      const addressCell = document.createElement("td");
      const deleteCell = document.createElement("td");

      nameCell.textContent = name;
      pizzaCell.textContent = pizza;
      addressCell.textContent = address;

      // Add delete button to the new row
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.onclick = () => {
        tbody.removeChild(newRow);
      };
      deleteCell.appendChild(deleteButton);

      newRow.appendChild(nameCell);
      newRow.appendChild(pizzaCell);
      newRow.appendChild(addressCell);
      newRow.appendChild(deleteCell);

      tbody.appendChild(newRow);
    }

    // Clear input fields after order
    nameInput.value = "";
    pizzaInput.value = "";
    addressInput.value = "";
  }

  // Function to update an order
  function updateOrder() {
    const name = nameInput.value;
    const pizza = pizzaInput.value;
    const address = addressInput.value;

    // Find the row with the matching name
    const rows = tbody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (row.cells[0].textContent === name) {
        // Update
      row.cells[2].textContent = address;
      row.cells[1].textContent = pizza;
      break;
      }
      }
    nameInput.value = "";
    pizzaInput.value = "";
    addressInput.value = "";
    }

  // Function to delete an order
  function deleteOrder() {
  const name = nameInput.value;
  // Find the row with the matching name
  const rows = tbody.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row.cells[0].textContent === name) {
      tbody.removeChild(row);
      break;
    }
  }

  // Clear input fields after deletion
  nameInput.value = "";
  pizzaInput.value = "";
  addressInput.value = "";
  }
  
  populateTable();
</script>
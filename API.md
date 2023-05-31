
<html>
<head>
  <title>Pizza Order</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }

    input {
      width: 100%;
    }

    .Ptable {
      margin-bottom: 20px;
    }

    .delete-button {
      background-color: red;
      color: white;
    }
  </style>
</head>
<head>
  <title>Pizza Order</title>
</head>
<body>
  <script src="pizzaFront.js"></script>
  <h1>Order Table</h1>
  <table class="Ptable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Pizza</th>
        <th>Address</th>
        <th>Order</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input id="name" placeholder="Name"></td>
        <td><input id="pizza" placeholder="Pizza"></td>
        <td><input id="address" placeholder="Address"></td>
        <td><button onclick="addOrder()">Order</button></td>
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
        <th>Update</th>
      </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>

  <script src="pizzaFront.js"></script>
</body>
</html>

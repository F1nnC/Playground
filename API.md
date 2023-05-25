<!DOCTYPE html>
<html>
<head>
  <title>Pizza Order</title>
</head>
<body>
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

  <script src="pizzaFront.js"></script>
</body>
</html>

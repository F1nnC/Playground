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
<br>

<h1>API Learning</h1>
<p> Going to have explantions of API, methods, code images, and more </p>
<br>
<h1> GET METHOD </h1>
<br>
<h1> POST METHOD </h1>
<br>
<h1> UPDATE METHOD </h1>
<br>
<h1> DELETE METHOD </h1>

<script src="{{ '/assets/js/pizzaFront.js' | relative_url }}"></script>
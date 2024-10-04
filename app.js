init();
//add customer
function addCustomer() {

    customerarray = JSON.parse(localStorage.getItem("customer") || []);

    const customerId = document.getElementById("customer-id").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    const customer = {
        customerId1: customerId,
        firstName1: firstName,
        lastName1: lastName,
        phoneNumber1: phoneNumber,
        address1: address,
        email1: email
    };
    customerarray.push(customer);

    localStorage.setItem("customer", JSON.stringify(customerarray));

    alert('Customer added successfully!');

 }

function searchCustomer() {

    
    const customerId = document.getElementById("customer-id").value;
    console.log(customerId);
    
    const customerData = JSON.parse(localStorage.getItem("customer"));
    found = false;
        console.log(customerData);
        
        for (let i = 0; i < customerData.length; i++) {
          if (customerData[i].customerId1 === customerId) {            
            document.getElementById("first-name").value = customerData[i].firstName1;
            document.getElementById("last-name").value = customerData[i].lastName1;
            document.getElementById("phone-number").value = customerData[i].phoneNumber1;
            document.getElementById("address").value = customerData[i].address1;
            document.getElementById("email").value = customerData[i].email1;

            found = true;
            break;
          } else {
            
              console.log(false);
              
              found = false;
          }
        }
    if (found) {
        alert("Customer Found");
    } else {
        alert("Customer not Found");
    }
}

//update customer
let searchIndex1 = null; 

function updateCustomer() {
    let customers = JSON.parse(localStorage.getItem('customer')) || [];

    searchIndex1 = document.getElementById('customer-id').value;
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;

    if (searchIndex1 === null) {
        alert("Please search for a Customer before updating!");
        return;
    }
    for (let i = 0; i < customers.length; i++) {
        if(customers[i].customerId1===searchIndex1){
            searchIndex1 = i;
        }
    }
    
    customers[searchIndex1].firstName1 = firstName;
    customers[searchIndex1].lastName1 = lastName;
    customers[searchIndex1].phoneNumber1 = phoneNumber;
    customers[searchIndex1].address1 = address;
    customers[searchIndex1].email1 = email;

    localStorage.setItem('customer', JSON.stringify(customers));
    alert("ustomer Updated Successfully!");
    searchIndex1 = null;
    firstName = null;
    lastName = null;
    phoneNumber = null;
    address = null;
    email = null;
    
}

//delete customer

function deleteCustomer(){
    
    let customerId = document.getElementById('customer-id').value.trim();

    if (!customerId) {
        alert('Please enter a customer ID');
        return;
    }
    let index = -1;
    let customers = JSON.parse(localStorage.getItem('customer')) || [];
    console.log("Customers in localStorage:", customers);
    
    for (let i = 0; i < customers.length; i++) {
        if(customers[i].customerId1===customerId){
            index = i;
            console.log(customerId);
            break;
        }
        index = -1;
    }

    if (index === -1) {
        alert('Customer deleted successfully!');
        return;
    }

    customers.splice(index, 1);

    localStorage.setItem('customer', JSON.stringify(customers));

    document.querySelector('.customer-form').reset();

    alert('Customer deleted successfully!');

}


function init() {
    let customerarrayhome = JSON.parse(localStorage.getItem("customer")) || [];
    localStorage.setItem("customer", JSON.stringify(customerarrayhome));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify(cart));

    let order = JSON.parse(localStorage.getItem("order")) || [];
    localStorage.setItem("order", JSON.stringify(order));

    let itemlist = JSON.parse(localStorage.getItem("items")) || [{ itemid: "P0001", name: "Classic Burger(Large)", category: "burgers", unitprice: 1500, disrate: 0, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0002", name: "Classic Burger(Regular)", category: "burgers", unitprice: 750, disrate: 15, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0003", name: "Turkey Burger", category: "burgers", unitprice: 1600, disrate: 0, stock: 10, expdate: "2025-07-04" },
    { itemid: "P0004", name: "Chicken Burger(Large)", category: "burgers", unitprice: 1400, disrate: 0, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0005", name: "Chicken Burger(Regular)", category: "burgers", unitprice: 800, disrate: 20, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0006", name: "Cheese Burger(Large)", category: "burgers", unitprice: 1000, disrate: 0, stock: 10, expdate: "2025-07-04" },
    { itemid: "P0007", name: "Cheese Burger(Regular)", category: "burgers", unitprice: 600, disrate: 0, stock: 20, expdate: "2025-07-04" },
    { itemid: "P0008", name: "Bacon Burger", category: "burgers", unitprice: 650, disrate: 15, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0009", name: "Shawarma Burger", category: "burgers", unitprice: 800, disrate: 0, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0010", name: "olive Burger", category: "burgers", unitprice: 1800, disrate: 0, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0011", name: "Double-Cheese Burger", category: "burgers", unitprice: 1250, disrate: 20, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0012", name: "Crispy Chicken Burger(Regular)", category: "burgers", unitprice: 1200, disrate: 0, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0013", name: "Crispy Chicken Burger(Large)", category: "burgers", unitprice: 1600, disrate: 10, stock: 15, expdate: "2025-07-04" },
    { itemid: "P0014", name: "Paneer Burger", category: "burgers", unitprice: 900, disrate: 0, stock: 15, expdate: "2025-07-04" },

    { itemid: "P0015", name: "Crispy Chicken Submarine(Large)", category: "submarines", unitprice: 2000, disrate: 0, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0016", name: "Crispy Chicken Submarine(Regular)", category: "submarines", unitprice: 1500, disrate: 0, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0017", name: "Chicken Submarine(Large)", category: "submarines", unitprice: 1800, disrate: 3, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0018", name: "Chicken Submarine(Regular)", category: "submarines", unitprice: 1400, disrate: 0, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0019", name: "Grinder Submarine", category: "submarines", unitprice: 2300, disrate: 0, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0019", name: "Cheese Submarine", category: "submarines", unitprice: 2200, disrate: 0, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0020", name: "Double Cheese n Chicken Submarine", category: "submarines", unitprice: 1900, disrate: 16, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0021", name: "Special Horgie Submarine", category: "submarines", unitprice: 2800, disrate: 0, stock: 15, expdate: "2025-07-15" },
    { itemid: "P0022", name: "BQ Special Submarine", category: "submarines", unitprice: 3000, disrate: 0, stock: 15, expdate: "2025-07-15" },

    { itemid: "P0023", name: "Steak Fries(Large)", category: "fries", unitprice: 1200, disrate: 0, stock: 10, expdate: "2025-07-20" },
    { itemid: "P0024", name: "Steak Fries(Medium)", category: "fries", unitprice: 600, disrate: 0, stock: 10, expdate: "2025-07-20" },
    { itemid: "P0025", name: "French Fries(Large)", category: "fries", unitprice: 800, disrate: 0, stock: 10, expdate: "2025-07-20" },
    { itemid: "P0026", name: "French Fries(Medium)", category: "fries", unitprice: 650, disrate: 0, stock: 10, expdate: "2025-07-20" },
    { itemid: "P0027", name: "French Fries(Small)", category: "fries", unitprice: 450, disrate: 0, stock: 10, expdate: "2025-07-20" },
    { itemid: "P0028", name: "Sweet Potato Fries(Large)", category: "fries", unitprice: 600, disrate: 0, stock: 10, expdate: "2025-07-20" },

    { itemid: "P0029", name: "Chicken n Cheese Pasta", category: "pasta", unitprice: 1600, disrate: 15, stock: 5, expdate: "2025-07-02" },
    { itemid: "P0030", name: "Chicken Penne Pasta", category: "pasta", unitprice: 1700, disrate: 0, stock: 5, expdate: "2025-07-02" },
    { itemid: "P0031", name: "Ground Turkey Pasta Bake", category: "pasta", unitprice: 2900, disrate: 10, stock: 5, expdate: "2025-07-02" },
    { itemid: "P0032", name: "Creamy Shrimp Pasta", category: "pasta", unitprice: 2000, disrate: 0, stock: 5, expdate: "2025-07-02" },
    { itemid: "P0033", name: "Lemon Butter Pasta", category: "pasta", unitprice: 1950, disrate: 0, stock: 5, expdate: "2025-07-02" },
    { itemid: "P0034", name: "Tagliatelle Pasta", category: "pasta", unitprice: 2400, disrate: 1, stock: 5, expdate: "2025-07-02" },
    { itemid: "P0035", name: "Baked Ravioli", category: "pasta", unitprice: 2000, disrate: 1, stock: 5, expdate: "2025-07-02" },

    { itemid: "P0036", name: "Fried Chicken(Small)", category: "chicken", unitprice: 1200, disrate: 0, stock: 10, expdate: "2025-07-25" },
    { itemid: "P0037", name: "Fried Chicken(Regular)", category: "chicken", unitprice: 2300, disrate: 10, stock: 10, expdate: "2025-07-25" },
    { itemid: "P0038", name: "Fried Chicken(Large)", category: "chicken", unitprice: 3100, disrate: 5, stock: 10, expdate: "2025-07-25" },
    { itemid: "P0039", name: "Hot Wings(Large)", category: "chicken", unitprice: 2400, disrate: 0, stock: 10, expdate: "2025-07-25" },
    { itemid: "P0040", name: "Devilled Chicken(Large)", category: "chicken", unitprice: 900, disrate: 0, stock: 10, expdate: "2025-07-25" },
    { itemid: "P0041", name: "BBQ Chicken(Regular)", category: "chicken", unitprice: 2100, disrate: 0, stock: 10, expdate: "2025-07-25" },

    { itemid: "P0042", name: "Pepsi(330ml)", category: "beverage", unitprice: 990, disrate: 5, stock: 20, expdate: "2026-07-25" },
    { itemid: "P0043", name: "Coca-Cola(330ml)", category: "beverage", unitprice: 1230, disrate: 0, stock: 20, expdate: "2026-07-25" },
    { itemid: "P0044", name: "Sprite(330ml)", category: "beverage", unitprice: 1500, disrate: 3, stock: 20, expdate: "2026-07-25" },
    { itemid: "P0045", name: "Mirinda(330ml)", category: "beverage", unitprice: 850, disrate: 7, stock: 20, expdate: "2026-07-25" }];
    localStorage.setItem("items", JSON.stringify(itemlist));
}



function searchItemForOrders(){
  const itemId = document.getElementById("searchitem").value;

    const itemData = JSON.parse(localStorage.getItem("items"));
    console.log(itemData);
    found = false;
    itemData.forEach(element => {
        if (element.itemid == itemId) {
            document.getElementById("cartItemId").value = element.itemid;
            document.getElementById("cartItemName").value = element.name;
            document.getElementById("cartItemUnitPrice").value = element.unitprice;
            found = true;
        } else {
            found = false;
        }
    });
    if (found) {
        alert("Item Found");
    } else {
        alert(" Item Found");
    }
}

function addToCart(){
  
  let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
  let itemId = document.getElementById('cartItemId').value;
  let itemName =  document.getElementById('cartItemName').value;
  let quantity =  document.getElementById('qtyToAdd').value;
  let unitPrice = document.getElementById('cartItemUnitPrice').value;

  let cart = {
      itemId: itemId,
      itemName: itemName,
      quantity: quantity,
      unitPrice: unitPrice
  }
  
  cartArray.push(cart);

  localStorage.setItem("cart",JSON.stringify(cartArray));

}

window.onload = function viewcart() {
  
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartitems=document.getElementById("checkOutCart");
  let body=``;
  cart.forEach(data => {
      body+=`
          <tr>
              <td>${data.itemId}</td>
              <td>${data.itemName}</td>
              <td>${data.quantity}</td>
              <td>${data.unitPrice}</td>
          </tr>
      `
  });
  
  cartitems.innerHTML=body;
  let total=0;
  cart.forEach(element => {
      total+= (parseInt(element.unitPrice)*parseInt(element.quantity));

  });
  document.getElementById("totalAmount").value=total;
}

function placeOrder() {
  let order=JSON.parse(localStorage.getItem("order")) || [];
  let cart=JSON.parse(localStorage.getItem("cart")) || [];

  let orderId=document.getElementById("ordid").value;
  let customerId=document.getElementById("cusid").value;
  let time=document.getElementById("pickupTime").value;
  let date=document.getElementById("date").value;
  let totalAmount=document.getElementById("totalAmount").value;

  let neworder={
    orderId:orderId,
    customerId:customerId,
    cart:cart,
    time:time,
    date:date,
    totalAmount:totalAmount
  }
  order.push(neworder)
  localStorage.setItem("order",JSON.stringify(order));

  cart=[];
  localStorage.setItem("cart",JSON.stringify(cart));
}





//add item
function addItem() {
    const itemId = document.getElementById('item-id').value;
    const itemName = document.getElementById('item-name').value;
    const expiryDate = document.getElementById('exdate').value;
    const quantity = document.getElementById('qty').value;
    const category = document.getElementById('category').value;
    const unitPrice = document.getElementById('uprice').value;
    const disRate = document.getElementById('disrate').value;



    if (!itemId || !itemName || !expiryDate || !quantity || !category || !unitPrice || !disRate) {
        alert("Please fill in all fields");
        return;
    }

    const item = {
        itemid: itemId,
        name: itemName,
        expdate: expiryDate,
        stock: quantity,
        category: category,
        unitprice: unitPrice,
        disrate: disRate
    };

    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));

    console.log("Added Item:", item);

    console.log("All Items in localStorage:", items);

    document.querySelector('.customer-form').reset();

    alert('Item added successfully!');
}




function searchItem() {
    const itemId = document.getElementById("item-id").value;

    const itemData = JSON.parse(localStorage.getItem("items"));
    console.log(itemData);
    found = false;
    itemData.forEach(element => {
        if (element.itemid == itemId) {
            document.getElementById("item-name").value = element.name;
            document.getElementById("exdate").value = element.expdate;
            document.getElementById("qty").value = element.stock;
            document.getElementById("category").value = element.category;
            document.getElementById("disrate").value = element.disrate;
            document.getElementById("uprice").value = element.unitprice;


            found = true;
        } else {
            found = false;
        }
    });
    if (found) {
        alert("Item Found");
    } else {
        alert(" Item Not Found");
    }
}

//update item


let searchIndex = null; 

function updateItem() {
    let items = JSON.parse(localStorage.getItem('items')) || [];

    searchIndex = document.getElementById('item-id').value;
    let itemName = document.getElementById('item-name').value;
    let expiryDate = document.getElementById('exdate').value;
    let discountRate = document.getElementById('disrate').value;
    let unitPrice = document.getElementById('uprice').value;
    let quantity = document.getElementById('qty').value;
    let category = document.getElementById('category').value;

    if (searchIndex === null) {
        alert("Please search for an item before updating!");
        return;
    }
    for (let i = 0; i < items.length; i++) {
        if(items[i].itemid===searchIndex){
            searchIndex = i;
        }
    }
    
    items[searchIndex].name = itemName;
    items[searchIndex].expdate = expiryDate;
    items[searchIndex].stock = quantity;
    items[searchIndex].unitprice = unitPrice;
    items[searchIndex].disrate = discountRate;
    items[searchIndex].category = category;

    localStorage.setItem('items', JSON.stringify(items));
    alert("Item Updated Successfully!");
    searchIndex = null;
    itemName = null;
    expiryDate = null;
    discountRate = null;
    unitPrice = null;
    quantity = null;
    category = null;
    
}


//delete item
function deleteItem(){
    
    let itemId = document.getElementById('item-id').value.trim();

    if (!itemId) {
        alert('Please enter an Item ID');
        return;
    }
    let index = -1;
    let items = JSON.parse(localStorage.getItem('items')) || [];
    console.log("Items in localStorage:", items);
    
    for (let i = 0; i < items.length; i++) {
        if(items[i].itemid===itemId){
            index = i;
            console.log(itemId);
            break;
        }
        index = -1;
    }

    if (index === -1) {
        alert('Item not found for deletion');
        return;
    }

    items.splice(index, 1);

    localStorage.setItem('items', JSON.stringify(items));

    document.querySelector('.customer-form').reset();

    alert('Item deleted successfully!');

}

//view item
if(document.getElementById('Itemview')){
    let table;
    let items = JSON.parse(localStorage.getItem("items"));
    table = `<thead>
                <tr>
                    <th>Item Code</th>
                    <th>Item Name</th>
                    <th>Price (LKR)</th>
                    <th>Discount</th>
                </tr>
            </thead>
            `
    items.forEach(element => {
        table+=`<tbody>
                <tr>
                    <td>${element.itemid}</td>
                    <td>${element.name}</td>
                    <td>${element.unitprice}</td>
                    <td>${element.disrate}</td>
                </tr>
                </tbody>`;
    });

    document.getElementById('Itemview').innerHTML = table;

}


//update order

let searchIndexOrder = null;

function searchOrder() {
  const orderId = document.getElementById("customerId").value;
  const orders = JSON.parse(localStorage.getItem("Cart")) || [];

  const orderDetails = document.getElementById("orderDetails");
  orderDetails.style.display = "none";

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].orderId === orderId) {
      searchIndexOrder = i;
      document.getElementById("name").value = orders[i].customerName;
      document.getElementById("email").value = orders[i].email;
      document.getElementById("pickupTime").value = orders[i].pickupTime;
      document.getElementById("date").value = orders[i].date;

      const items = orders[i].items;
      for (let j = 0; j < items.length; j++) {
        const item = items[j];
        const itemInput = document.getElementById(`item${j + 1}`);
        const qtyInput = document.getElementById(`qty${j + 1}`);
        const priceInput = document.getElementById(`price${j + 1}`);

        itemInput.value = item.item;
        qtyInput.value = item.quantity;
        priceInput.value = item.price;
      }

      orderDetails.style.display = "block";
      break;
    }
  }

  if (searchIndexOrder === null) {
    alert("Order Not Found !!");
  }
}

function updateOrder() {
  if (searchIndexOrder === null) {
    alert("Search An Order !!");
  } else {
    const orders = JSON.parse(localStorage.getItem("Cart")) || [];
    const order = orders[searchIndexOrder];

    order.customerName = document.getElementById("name").value;
    order.email = document.getElementById("email").value;
    order.pickupTime = document.getElementById("pickupTime").value;
    order.date = document.getElementById("date").value;

    const items = order.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemInput = document.getElementById(`item${i + 1}`);
      const qtyInput = document.getElementById(`qty${i + 1}`);
      const priceInput = document.getElementById(`price${i + 1}`);

      item.item = itemInput.value; 
      item.quantity = qtyInput.value;
      item.price = priceInput.value;
    }

    localStorage.setItem("Cart", JSON.stringify(orders));
    alert("Order Updated Successfully !!");
    searchIndexOrder = null;
  }
}

//delete order


function deleteOrder() {
    let orderId = document.getElementById('orderId').value;

    if (!orderId) {
        alert('Please enter a Order ID');
        return;
    }
    let index = -1;
    let orders = JSON.parse(localStorage.getItem('order')) || [];
    
    for (let i = 0; i < orders.length; i++) {
        if(orders[i].orderId===orderId){
            index = i;
            break;
        }
        index = -1;
    }

    if (index === -1) {
        alert('Order not found for deletion');
        return;
    }

    orders.splice(index, 1);

    localStorage.setItem('order', JSON.stringify(orders));

    alert('order deleted successfully!');
}



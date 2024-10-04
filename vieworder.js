window.onload = function viewOrder() {
    order = JSON.parse(localStorage.getItem("order")) || [];
    let cartitems=document.getElementById("orderBody");
    let body=``;
    order.forEach(data => {
        body+=`
            <tr>
                <td>${data.orderId}</td>
                <td>${data.customerId}</td>
                <td>${data.time}</td>
                <td>${data.date}</td>
            </tr>
        `
    });
    
    cartitems.innerHTML=body;
  }
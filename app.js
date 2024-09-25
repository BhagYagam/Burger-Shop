// Function to get stored customer data from localStorage
function getCustomerData() {
    return JSON.parse(localStorage.getItem('customers')) || {};
}

// Function to save customer data back to localStorage
function setCustomerData(customers) {
    localStorage.setItem('customers', JSON.stringify(customers));
}

// Add Customer
function addCustomer(event) {
    event.preventDefault();  // Prevent form submission
    let customerID = document.getElementById('customer-id').value;
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;

    // Get existing customers
    let customers = getCustomerData();

    // Check if customerID already exists
    if (customers[customerID]) {
        alert('Customer with this ID already exists!');
        return;
    }

    // Add new customer
    customers[customerID] = { firstName, lastName, phoneNumber, address, email };
    setCustomerData(customers);
    alert('Customer added successfully!');
    document.querySelector('form').reset();
}

// View Customer
function viewCustomer(event) {
    event.preventDefault();  // Prevent form submission
    let customerID = document.getElementById('customer-id').value;

    // Get existing customers
    let customers = getCustomerData();

    // Check if customer exists
    if (!customers[customerID]) {
        alert('Customer not found!');
        return;
    }

    // Display customer details
    document.getElementById('first-name').value = customers[customerID].firstName;
    document.getElementById('last-name').value = customers[customerID].lastName;
    document.getElementById('phone-number').value = customers[customerID].phoneNumber;
    document.getElementById('address').value = customers[customerID].address;
    document.getElementById('email').value = customers[customerID].email;
}

// Update Customer
function updateCustomer(event) {
    event.preventDefault();  // Prevent form submission
    let customerID = document.getElementById('customer-id').value;

    // Get existing customers
    let customers = getCustomerData();

    // Check if customer exists
    if (!customers[customerID]) {
        alert('Customer not found!');
        return;
    }

    // Update customer details
    customers[customerID].firstName = document.getElementById('first-name').value;
    customers[customerID].lastName = document.getElementById('last-name').value;
    customers[customerID].phoneNumber = document.getElementById('phone-number').value;
    customers[customerID].address = document.getElementById('address').value;
    customers[customerID].email = document.getElementById('email').value;

    // Save updated data
    setCustomerData(customers);
    alert('Customer updated successfully!');
    document.querySelector('form').reset();
}

// Delete Customer
function deleteCustomer(event) {
    event.preventDefault();  // Prevent form submission
    let customerID = document.getElementById('customer-id').value;

    // Get existing customers
    let customers = getCustomerData();

    // Check if customer exists
    if (!customers[customerID]) {
        alert('Customer not found!');
        return;
    }

    // Delete customer
    delete customers[customerID];
    setCustomerData(customers);
    alert('Customer deleted successfully!');
    document.querySelector('form').reset();
}

// Attach event listeners to buttons in each page

// For Add Customer page
if (document.querySelector('form.customer-form')) {
    document.querySelector('form.customer-form').addEventListener('submit', function(event) {
        const formType = document.querySelector('h1').innerText;
        if (formType.includes('Add')) {
            addCustomer(event);
        } else if (formType.includes('View')) {
            viewCustomer(event);
        } else if (formType.includes('Update')) {
            updateCustomer(event);
        } else if (formType.includes('Delete')) {
            deleteCustomer(event);
        }
    });
}

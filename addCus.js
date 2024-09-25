document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".customer-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const customerId = document.getElementById("customer-id").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const phoneNumber = document.getElementById("phone-number").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;

        const customer = {
            customerId: customerId,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address,
            email: email
        };

        // Store the customer in localStorage
        localStorage.setItem(customerId, JSON.stringify(customer));

        console.log("Customer Information added to localStorage:");
        console.log(customer);

        // Reset the form after submission
        form.reset();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-btn");

    // Add event listener to the search button
    searchButton.addEventListener("click", function() {
        // Get the customer ID from the input field
        const customerId = document.getElementById("customer-id").value;

        // Retrieve customer data from localStorage using the customer ID
        const customerData = localStorage.getItem(customerId);

        if (customerData) {
            // Parse the JSON string back into an object
            const customer = JSON.parse(customerData);

            // Populate the form fields with the customer data
            document.getElementById("first-name").value = customer.firstName;
            document.getElementById("last-name").value = customer.lastName;
            document.getElementById("phone-number").value = customer.phoneNumber;
            document.getElementById("address").value = customer.address;
            document.getElementById("email").value = customer.email;
        } else {
            // Clear the form and show a message if no customer is found
            alert("Customer not found!");
            document.getElementById("first-name").value = '';
            document.getElementById("last-name").value = '';
            document.getElementById("phone-number").value = '';
            document.getElementById("address").value = '';
            document.getElementById("email").value = '';
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".customer-form");
    const searchButton = document.querySelector(".search-btn");

    // Add event listener to the search button
    searchButton.addEventListener("click", function() {
        const customerId = document.getElementById("customer-id").value;
        const customerData = localStorage.getItem(customerId);

        if (customerData) {
            const customer = JSON.parse(customerData);

            // Populate the form with the retrieved customer data
            document.getElementById("first-name").value = customer.firstName;
            document.getElementById("last-name").value = customer.lastName;
            document.getElementById("phone-number").value = customer.phoneNumber;
            document.getElementById("address").value = customer.address;
            document.getElementById("email").value = customer.email;
        } else {
            alert("Customer not found!");
            form.reset();
        }
    });

    // Update customer details when the form is submitted
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const customerId = document.getElementById("customer-id").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const phoneNumber = document.getElementById("phone-number").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;

        const updatedCustomer = {
            customerId: customerId,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address,
            email: email
        };

        // Save the updated customer data to localStorage
        localStorage.setItem(customerId, JSON.stringify(updatedCustomer));

        alert("Customer updated successfully!");

        // Optional: reset the form after submission
        form.reset();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".customer-form");
    const searchButton = document.querySelector(".search-btn");

    // Add event listener to the search button
    searchButton.addEventListener("click", function() {
        const customerId = document.getElementById("customer-id").value;
        const customerData = localStorage.getItem(customerId);

        if (customerData) {
            const customer = JSON.parse(customerData);

            // Populate the form with the retrieved customer data
            document.getElementById("first-name").value = customer.firstName;
            document.getElementById("last-name").value = customer.lastName;
            document.getElementById("phone-number").value = customer.phoneNumber;
            document.getElementById("address").value = customer.address;
            document.getElementById("email").value = customer.email;
        } else {
            alert("Customer not found!");
            form.reset();
        }
    });

    // Delete customer details when the form is submitted
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const customerId = document.getElementById("customer-id").value;
        
        // Check if the customer exists before attempting to delete
        if (localStorage.getItem(customerId)) {
            // Delete the customer data from localStorage
            localStorage.removeItem(customerId);
            alert("Customer deleted successfully!");

            // Clear the form fields after deletion
            form.reset();
        } else {
            alert("Customer ID not found, cannot delete.");
        }
    });
});

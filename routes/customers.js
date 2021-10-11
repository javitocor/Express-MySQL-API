var express = require('express');
var router = express.Router();

var customer_controller = require('../controllers/customerController');

// Create a new Customer
router.post("/customers", customer_controller.create);

// Retrieve all Customers
router.get("/customers", customer_controller.findAll);

// Retrieve a single Customer with customerId
router.get("/customers/:customerId", customer_controller.findOne);

// Update a Customer with customerId
router.put("/customers/:customerId", customer_controller.update);

// Delete a Customer with customerId
router.delete("/customers/:customerId", customer_controller.delete);

// Delete Customer
router.delete("/customers", customer_controller.deleteAll);

module.exports = router;

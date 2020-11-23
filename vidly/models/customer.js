const mongoose = require("mongoose");
const Joi = require('joi');


const customersSchema = new mongoose.Schema({
    isGold: {
        type: String
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    }
});

const Customer = mongoose.model('Customer', customersSchema);

function validateGenre(customer) {
    const schema = {
        name: Joi.string().min(3).max(20).required(),
        phone: Joi.string().min(11).max(11).required(),
        isGold: Joi.string()    
    };
  
    return Joi.validate(customer, schema);
}


exports.Customer = Customer;
exports.validate = validateGenre;



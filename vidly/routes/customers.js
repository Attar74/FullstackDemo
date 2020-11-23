const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const {Customer, validate} = require('../models/customer');


router.get('/',async (req, res)=>{
    const customers = await Customer.find().sort({name: 1});
    res.send(customers);
})

router.put('/:id',async (req, res)=>{
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    id = req.params.id;
    const customer = await Customer.findByIdAndUpdate(id,{
        name: req.body.name
    },{new:true});

    if (!customer) return res.status(404).send('The customer with the given ID was not found.');

    res.send(customer);
});

router.get('/:name', async (req, res)=>{
    _name = req.params.name;
    const customer = await Customer.find({name: _name});
    if(!customer) return res.status(404).send("This user not founded...!");
    else res.send(customer);
})

router.post('/',async (req, res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();

    res.send(customer);
});



router.delete('/:id', async (req, res)=>{
    id = req.params.id;
    const customer =  await Customer.findByIdAndRemove(id);
    if(!customer) return res.status(404).send("This user not founded...!");
    else res.send(customer);
})

module.exports = router;
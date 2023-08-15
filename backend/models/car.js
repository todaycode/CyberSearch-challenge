const mongoose = require('mongoose');

const Car = mongoose.model('Car', {
    manufacturer : {
        type: String,
        trim: true,
        required: true
    },
    model : {
        type: String,
        trim: true
    },
    package : {
        type: String,
        trim: true
    },
    color : {
        type: String,
        trim: true
    },
    year : {
        type: Number,
        min: 2023
    },
    category : {
        type: String,
        enum: ['Truck', 'Sedan', 'SUV']
    },
    mileage : {
        type: String,
        trim: true
    },
    price : {
        type: String,
        required: true
    },
    id : {
        type: String,
        unique: true
    }
});

module.exports = {Car};

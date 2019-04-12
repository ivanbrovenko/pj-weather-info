const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    city_name: String,
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('City', CitySchema);
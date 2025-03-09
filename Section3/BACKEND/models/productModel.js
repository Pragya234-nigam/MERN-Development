//Mongoose odm framewrok
//orl framework
const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    quantity: String,
    brand: String,
    price: Number,
    image: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('product', mySchema);

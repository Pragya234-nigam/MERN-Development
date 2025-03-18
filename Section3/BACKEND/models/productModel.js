//Mongoose odm framewrok
//orl framework
const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    quantity: {type: Number, default: 1},
    brand: {type:String,default:'Unknown'},
    price:{type:Number,required:true},
    image: {type: String, default: 'unknnown.jpg'},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('product', mySchema);

const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    description: String,
    quantity: Number,
});

module.exports = {
    schema, 
    model: mongoose.model("Categories", schema )
};

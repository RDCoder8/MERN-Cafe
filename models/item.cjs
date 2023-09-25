const {model} = require('mongoose')

//Ensure the category model is processed by Mongoose before making an item
//require function executes the file first and then grabs the exports
require("./category.cjs")

const itemSchema = require("./itemSchema.cjs")

module.exports = model("Item", itemSchema)
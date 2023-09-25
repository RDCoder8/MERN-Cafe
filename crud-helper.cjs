// Connect to the database
require("dotenv").config();
const db = require("./config/database.cjs");

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
const Order = require("./models/order.cjs");

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

// setTimeout(() => {
//     db.close();
// }, 5000)

Order.create({
  user: "650c504eee0c36a53a25ad3b",
  isPaid: true,
  lineItems: [
    {
      qty: 7,
      item: {
        name: 'Hamburger',
        emoji: '🍔',
        price: 5.95,
      }
    },
    {
      qty: 5,
      item: {
        name: 'Turkey Sandwich',
        emoji: '🥪',
        price: 6.95,
      }
    }
  ]
}).then((order) => {
  console.log(order)
}).finally(() => {
  db.close()
})

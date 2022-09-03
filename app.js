const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.APP_PORT;

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { constants } = require('buffer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findByPk(1)
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => console.log(err));
});

// Route traffic and filtering
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Add 404 Error Page
app.use(errorController.get404);

///  Databbse  Relations
Product.belongsTo(User, { constants: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem })
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
//.sync({ force: true })
.sync()
.then(result => {
  return User.findByPk(1);
  // console.log(result);
}).then(user => {
  if (!user) {
    return User.create({ name: 'Joseph', email: 'josephakeni@gmail.com'});
  }
  return user;
})
.then(user => {
  // console.log(user);
  return user.createCart();
}).then(cart => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
  });
})
.catch(err => {
  console.log(err);
});


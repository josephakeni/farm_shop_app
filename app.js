const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.APP_PORT;

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Route traffic and filtering
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Add 404 Error Page
app.use(errorController.get404);

sequelize.sync().then(result => {
  console.log(result);
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
  });
})
.catch(err => {
  console.log(err);
});


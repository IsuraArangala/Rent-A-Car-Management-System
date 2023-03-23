require('dotenv').config(); // Load environment variables from .env file
const pg = require('pg');

const bodyParser = require('body-parser');


const express = require('express')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3001

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg,
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const vehicleRoutes = require('./routes/vehicleRoutes');
app.use('/vehicles', vehicleRoutes);

(async () => {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync({ force: true }); // Force table creation on every app start
    console.log('All models were synchronized successfully.');
  })();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


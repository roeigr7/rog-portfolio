const mongoose = require('mongoose');
const config = require('../config');
const fetchInitial = require('./FetchInitialData');

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async () => {
    console.log('starting POUPLATE db');
    await fetchInitial.populate();
    await mongoose.connection.close();

    console.log('db has been populated');
  }
);

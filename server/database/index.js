const mongoose = require('mongoose');
const config = require('../config');

require('./models/skill');
exports.connect = async () => {
  await mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    },
    () => {
      console.log('connected db');
    }
  );
};

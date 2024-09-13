const mongoose = require('mongoose');

// Replace 'yourConnectionString' with your MongoDB connection string
mongoose.connect('yourConnectionString', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

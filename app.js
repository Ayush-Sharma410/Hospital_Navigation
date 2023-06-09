const express = require('express');
const mongoose = require('mongoose');
const Route = require('./models/route');

// Create Express app
const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ayushsharma410:iamayush@cluster0.2xk7cm7.mongodb.net/Hospital?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define API endpoint
app.get('/api/routes', (req, res) => {
  const startRoom = req.query.startRoom;
  const endRoom = req.query.endRoom;

  // Find the route with startRoom and endRoom
  Route.findOne({ startRoom, endRoom })
    .then((route) => {
      if (route) {
        res.json(route);
      } else {
        res.status(404).json({ message: 'Route not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error retrieving route' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

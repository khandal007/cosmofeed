// app.js
const express = require('express');
const bodyParser = require('body-parser');
const NotificationService = require('./notification-service');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Notification Service instance
const notificationService = new NotificationService();

// Route to send notifications
app.post('/send-notification', (req, res) => {
  const { user, message } = req.body;

  if (!user || !message) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  try {
    // Send notification using the Notification Service
    notificationService.sendNotification(user, message);
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

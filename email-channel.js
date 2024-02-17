module.exports = {
    send: (user, message) => {
      console.log(`Sending email to ${user.name} (${user.email}): ${message}`);
      // Implement actual email sending logic here
    },
  };
const SignupBuilder = require('./SignupBuilder');

// Signup.create('John Doe', 'john@email.com', 25, 'johndoe.jpg', 'John_D', ['JavaScript','Node.js'], ['Node.js'], true, false);

new SignupBuilder('John Doe', 'john@email.com', 25)
  .setPhoto('johndoe.jpg')
  .setNick('John_D')
  .setAdmin()
  .create();
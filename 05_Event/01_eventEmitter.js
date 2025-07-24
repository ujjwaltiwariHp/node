const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// Register another listener for the 'greet' event
myEmitter.on('greet', () => {
  console.log('Another greeting!');
});

myEmitter.emit('greet', 'Bob'); // Output: Hello, Bob! \n Another greeting!
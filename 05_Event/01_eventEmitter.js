const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Listener
myEmitter.on('greet', () => {
  console.log('Hello Ujjwal!');
});

// Emit event
myEmitter.emit('greet');

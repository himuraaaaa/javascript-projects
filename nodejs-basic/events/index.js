const { EventEmitter } = require('events');
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
const myEventEmitter = new EventEmitter();
   
myEventEmitter.on('happy-birthday', birthdayEventListener);

myEventEmitter.emit('happy-birthday', 'Oniel');
   
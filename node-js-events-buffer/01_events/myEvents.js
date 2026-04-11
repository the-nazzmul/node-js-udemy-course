import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (userName) => {
  console.log(`Hello ${userName}, welcome to events in node js`);
});

eventEmitter.once("pushNotify", () => {
  console.log(`This event will run only once`);
});

//Emit the event
// eventEmitter.emit("greet", "Nazmul");
// eventEmitter.emit("greet", "Ashleen");
// eventEmitter.emit("pushNotify");
// eventEmitter.emit("pushNotify");
// eventEmitter.emit("greet", "Abdullah");

const myListener = () => {
  console.log(`I am a test listener`);
};

eventEmitter.on("test", myListener);
eventEmitter.emit("test");
eventEmitter.removeListener("test", myListener);
eventEmitter.emit("test");

console.log(eventEmitter.listeners("greet"));

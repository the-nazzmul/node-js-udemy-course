import EventEmitter from "node:events";

//extending the class
class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`Message sent: ${msg}`);
    this.emit("messageReceived", msg);
  }
}

//making a new instance 
const chat = new Chat();

// actually using it
chat.on("messageReceived", (msg) => {
  console.log(`New message: ${msg}`);
});

chat.sendMessage("Hello Nazmul");

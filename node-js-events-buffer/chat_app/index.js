import ChatRoom from "./chatRoom.js";

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});
chat.on("sendMessage", (user, message) => {
  console.log(`${user}: ${message}`);
});
chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

//simulating the chat

chat.join("Alice");
chat.join("Bob");

chat.sendMessage("Alice", "Hello! I am Alice. Glad to be here");
chat.sendMessage("Bob", "Hello! I am Bob. Glad to have you");

chat.leave("Alice");
chat.sendMessage("Alice", "This message won't be sent");
chat.leave("Bob");

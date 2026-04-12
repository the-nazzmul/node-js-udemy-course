import { Buffer } from "node:buffer";

// const buff = Buffer.alloc(4);

// console.log(buff[0]); //basically it's an <Uint8Array>

// const buf = Buffer.from("Hello World");

// console.log(buf);
// console.log(buf.toString());

// const buf2 = Buffer.allocUnsafe(110);

// console.log(buf2);

// const buf = Buffer.alloc(10);

// buf.write("Hello");
// console.log(buf.toString());

// const buf = Buffer.from("Project One");

// console.log(buf.toString());
// console.log(buf.toString("utf8", 0, 4));

// const buf = Buffer.from("Coffee");
// console.log(buf);
// buf[0] = 0x4a;
// console.log(buf);
// console.log(buf.toString());

const buf1 = Buffer.from("Nazmul");
const buf2 = Buffer.from(" Hussain");

const merged = Buffer.concat([buf1, buf2]);

console.log(merged.toString());
console.log(merged.length);

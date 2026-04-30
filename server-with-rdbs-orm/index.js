import db from "./db/index.js";
import { usersTable } from "./drizzle/schema.js";

async function getAllUsers() {
  const users = await db.select().from(usersTable);
  console.log(`Users in DB`, users);
  return users;
}

async function createUser({ id, name, email }) {
  await db.insert(usersTable).values({ id, name, email });
}

// createUser({ id: 1, name: "John Doe", email: "john.doe@example.com" });
// createUser({ id: 2, name: "John Doe 2", email: "john.doe2@example.com" });

getAllUsers();

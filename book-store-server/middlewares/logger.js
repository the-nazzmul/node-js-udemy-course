import fs from "node:fs";

export const loggerMiddleware = (req, res, next) => {
  const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync("logs.txt", log);
  next();
};

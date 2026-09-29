import "dotenv/config";
import { createServer } from "node:http";
import { createApp } from "../app";
import { serveStatic, setupVite } from "./vite";

const app = createApp();
const server = createServer(app);
const port = Number(process.env.PORT ?? 3000);

if (process.env.NODE_ENV === "production") {
  serveStatic(app);
} else {
  await setupVite(app, server);
}

server.listen(port, "0.0.0.0", () => {
  console.log(`[server] listening on http://localhost:${port}`);
});

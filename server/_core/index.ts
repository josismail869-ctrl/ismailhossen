import "dotenv/config";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import { createServer } from "node:http";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

const app = express();
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use(
  "/api/trpc",
  createExpressMiddleware({ router: appRouter, createContext })
);

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

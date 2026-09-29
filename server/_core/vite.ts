import express, { type Express } from "express";
import type { Server } from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createServer as createViteServer } from "vite";

const PROJECT_ROOT = path.resolve(import.meta.dirname, "../..");

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { server } },
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    try {
      const template = fs.readFileSync(
        path.resolve(PROJECT_ROOT, "client", "index.html"),
        "utf-8"
      );
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(PROJECT_ROOT, "dist", "public");
  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

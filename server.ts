import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Serve API routes first
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Dynamic background video resolver endpoint
  app.get("/api/video-url", async (req, res) => {
    try {
      // Direct high-quality video URL explicitly provided by the user
      const directUrl = "https://res.cloudinary.com/dwlw1svvr/video/upload/v1782797768/kling_20260630_Image_to_Video__3207_0_hgzyuu.mp4";
      return res.json({ success: true, url: directUrl });
    } catch (error: any) {
      console.error("Error fetching background video:", error.message);
      return res.json({ 
        success: false, 
        error: error.message,
        url: "https://res.cloudinary.com/dwlw1svvr/video/upload/v1782797768/kling_20260630_Image_to_Video__3207_0_hgzyuu.mp4"
      });
    }
  });

  // Vite integration for development vs production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

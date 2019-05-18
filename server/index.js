const express = require("express");
const next = require("next");
const path = require("path");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./web" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(express.static(path.join(__dirname, "../")));

    server.get("/about", (req, res) => {
        return app.render(req, res, "/about", req.query);
    });

    server.get("/b", (req, res) => {
        return app.render(req, res, "/b", req.query);
    });

    server.get("/posts/:id", (req, res) => {
        return app.render(req, res, "/posts", { id: req.params.id });
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

const express = require("express");

const app = express();

const PORT = 3000;

// Route
app.get("/hello", (req, res) => {
    res.send("Hello API");
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
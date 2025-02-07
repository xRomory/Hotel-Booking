const express = require("express");

const app = express();

const port = process.env.PORT || 5173;

app.listen(port, () => `Server running on port ${port}`);
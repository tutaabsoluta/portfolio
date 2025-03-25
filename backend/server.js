const express = require("express");
require("dotenv").config();

const applySecurityMiddleware = require("./src/middlewares/security");
const emailRoutes = require("./src/routes/emailRoutes");

const app = express();

applySecurityMiddleware(app);

app.use("/api", emailRoutes);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));

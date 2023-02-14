const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static("public"));

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Web server running at port ${port}`);
});

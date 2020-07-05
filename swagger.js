const YAML = require("yamljs");
const express = require("express");
const swaggerUi = require("swagger-ui-express");

const PORT = 3001;
const app = express();
const ticketingDocs = YAML.load("./swagger.yaml");

var defaultOption = {
  explorer: true,
};

app.use("/", swaggerUi.serve, swaggerUi.setup(ticketingDocs, defaultOption));

app.listen(PORT, () => console.log(`Running Swagger .. on port ${PORT}`));
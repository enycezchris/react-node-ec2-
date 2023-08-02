const express = require("express");
const app = express();
const { db, Information } = require("./db");

const jsonObj = { title: "Hello World!", description: "EC2 Node App!" };

const PORT = 3001;

app.get("/", (req, res) => {
  res.json(jsonObj);
});

const setupData = async () => {
  await db.sync({ force: true });
  const newInfo = await Information.create({
    title: "Hello World!",
    description: "Testing psql/sequelize on aws rds",
  });
  console.log("newInfo", newInfo);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on port ${PORT}`);
  });
};

setupData();

const express = require("express");
const app = express();
const { db, Information } = require("./db");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

// cors middleware
app.use(cors());

// api endpoints
app.get("/", async (req, res) => {
  const information = await Information.findAll();
  console.log("information", information);
  res.json(information);
});

// setup and connecting DB
const setupData = async () => {
  await db.sync({ force: true });
  const [info1, info2] = await Promise.all([
    Information.create({
      title: "React Node App!",
      description: "Deploy React Express App on EC2 Instance!",
    }),
    Information.create({
      title: "Deployment on EC2 Works!",
      description: "React Node App Deployed!",
    }),
  ]);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on port ${PORT}`);
  });
};

setupData();

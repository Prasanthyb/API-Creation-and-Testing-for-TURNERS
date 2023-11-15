const express = require("express");
const app = express();
app.use(express.json());



const cors = require("cors");
app.use(cors());
const db = require("./models")



const carRouter = require("./routes/Path");
app.use("/cars", carRouter);



db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("Server running on port 4000");
  });
});
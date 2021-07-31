require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const adminRoute = require("./routes/adminroutes");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const app = express();

app.use(cors());

//initializing of mongoDb
mongoose.connect(process.env.MONGO_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", (err) => {
  console.log(err || "connected to database...");
});

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/admin", adminRoute);
app.use("/user", userRoute);

// app.use("/user", (req, res) => {
//   res.send({
//     token: "test",
//   });
// });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

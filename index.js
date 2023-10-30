const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const doctorRoutes = require("./routes/doctorRoutes.js");
const bodyParser = require("body-parser");
const cors = require("cors");

//dotenv config
dotenv.config();

//Mongo DB connection
connectDB();

//Rest Object
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctor", doctorRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected to ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const submitdata_route = require("./route/submitdata");
const getdata_route = require("./route/getdata");
const formdataDB = require("./DBconfig");
formdataDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", submitdata_route);
app.use("/api", getdata_route);

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 5500;

app.get("/", (req, res) => {
  res.status(200).send("Fill in the form accordingly!")
});

mongoose.connection.once("open", async () => {
    console.log("Connected to the Employee Database.");
    app.listen(port, async (err) => {
      if (err) {
        throw new Error("Error connecting to the server");
      }
      console.log(`Server is running on http://localhost:${port}`);
    });
  });
  
  mongoose.connection.on("error", async (err) => { 
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
  

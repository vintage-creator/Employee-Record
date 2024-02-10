require("dotenv").config();
const path = require("path");
const fs = require('fs');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const submitdata_route = require("./route/submitdata");
const getdata_route = require("./route/getdata");
const formdataDB = require("./DBconfig");
formdataDB();

app.use(cors());
const staticFilePath = path.join(__dirname, "hublog/dist");
app.use(express.static(staticFilePath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", submitdata_route);
app.use("/api", getdata_route);

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 5500;

app.get('/files/:filename', (req, res) => {
  const url = req.params.filename;
  const filename = path.basename(url);
  const filePath = path.join(__dirname, 'uploads', filename);
  console.log(filePath, "file")

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Stream the file to the client
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).send('File not found');
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(staticFilePath, "index.html"));
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
  

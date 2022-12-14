const express = require("express");
const path = require("path");
require('dotenv').config();
const router = require("./routes/index");
const fileuplod = require("express-fileupload");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.static(path.join(__dirname, "static")))

app.use("/api", router)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started! Port: ${PORT}`);
        })
    } catch(e) {
        console.log(e.message);
    }
}

start()
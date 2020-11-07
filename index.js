const express = require("express")
const mongoose = require("mongoose")
const app = express()
// connecting mongodb container to our node app
const DATABASE = "mongodb://mymongo:27017/testup";


mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Database connected");
    })
    .catch(() => {
        console.log("Error in db");
    });


app.get("/", (req, res) => {
    res.json({
        message: "Hakuna Matata"
    });
});


app.listen(8000)
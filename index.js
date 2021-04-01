const express = require('express');
const app = express();

app.listen(9000, function() {
    console.log("server up");
})

app.get('/', function(req, res) {
    res.send("I'm alive");
})
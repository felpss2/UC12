
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
 
// Without middleware
app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };
 
    const fileName = 'teste.txt';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
 
app.listen(PORT, function (err) {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});
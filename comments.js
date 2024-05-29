//create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//create a port
const port = 3000;

//parse request
app.use(bodyParser.urlencoded({ extended: false }));

//parse json
app.use(bodyParser.json());

//get request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//post request
app.post('/comments', (req, res) => {
    console.log(req.body);
    res.send('Post Request Successful');
});

//listen to the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

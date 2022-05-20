// Sets up beginning of the Express Server, import stuff in node module
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
// require('dotenv').config()

// app is express and calls it
const app = express();

var corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))


// Boiler plate code - copy and paste
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ****Only update these to match routes - hook up the pieces of the api here()
require('../urlServer/App/index')
require('./app/routes/recipes.routes')(app); // file extension to routes file
require('./app/routes/users.routes')(app)


// tells server to load
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})

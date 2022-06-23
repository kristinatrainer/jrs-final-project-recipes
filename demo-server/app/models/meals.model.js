const mongoose = require("mongoose");

    const mealSchema = new mongoose.Schema({
        name: String,
        difficulty: Number,
        ingredients: [
            {
                name: String,
                category: String,
            }
        ],
        instructions: [String],
        mealType: String, // 'lunch', 'dinner', etc
        estimatedTime: Number, // minutes
        cuisine: String, // 'greek', 'mexican', 'etc'
        tools: [ String ], // 'measuring cups', 'whisk', etc
        glutenFree: Boolean,
        vegan: Boolean
    });

  module.exports = mongoose.model(
        "meal", mealSchema);



// -----THIS IS THE DB CONFIG FILE -------------
// // connect to mongoDB
// const dbConfig = require('./config/db.config');

// const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

// const db = {};
// db.mongoose = mongoose;
// db.url = dbConfig.url;

// db.recipes = require("./models/recipes.model.js")(mongoose);

// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");
//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });

// module.exports = db;
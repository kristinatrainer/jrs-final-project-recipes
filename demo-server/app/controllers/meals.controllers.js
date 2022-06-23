const db = require('../index')
const Meal = require('../models/meals.model')


exports.getAllMeals = (req, res) => {
    Meal.find({})
        .then(data => {
            if (data.length == 0) {
                res.status(404)
                    .send({
                        message: "No Meals Found"
                    })
            }
            console.log('data', data)
            res.send({
                meals: data,
                message: "great success!"
            })

        })
        .catch(err => {
            res.status(500)
                .send({
                    message: "Oops! There was a server error geting the meals. Please try again later.",
                    error: err
                })
        })
        .finally(() => { })
}


exports.getMealsByGlutenFree = (req, res) => {
    res.send("method not implemented")
}

exports.addNewMeal = (req, res) => {
    // 1) parse the body/params
    const { name } = req.body;
    // difficulty, ingredients,  instructions, mealType, estimatedTime, cuisine, tools, glutenFree, vegan
    //2) validate
    if (!name) {
        // || !difficulty || !ingredients || !instructions || !mealType || !estimatedTime || !cuisine || !tools || !glutenFree || !vegan
        res.status(400)
            .send({
                message: 'Could not add meal. Please fill all fields'
            })
        return;
    }
    console.log(req.body)

    const meal = new Meal(req.body)

    meal.save(meal)
        .then(data => {
            res.send({
                meal: data,
                message: "Success!"
            })
        })
        .catch(err => {
            res.status(500)
                .send({
                    message: "There was an error creating a meal",
                    error: err
                })
        })
        .finally(() => {
            console.log("This worked! It sent the new meal")
        })
}

// MONGODB: Controllers: Still the same thought process for creating. All Express servers are the same
// But ADD to top a const for your Palettes
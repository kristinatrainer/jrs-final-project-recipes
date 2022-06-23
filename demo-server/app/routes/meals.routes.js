module.exports =(app) => {
 
    const meals = require('../controllers/meals.controllers')  // this connects to CONTROLLERs file
    
    app.get("/api/meals/", meals.getAllMeals )
    
}

// * ADD FEATURES AFTER MVP: Get by Gluten Free, Add new Meal * 
//--> app.get("/api/meals/glutenfree", meals.getMealsByGlutenFree )
//--> app.post("/api/meals/", meals.addNewMeal )

//MongoDB: Routes: Still the same thought process for creating. All Express servers are the same. 
//Anything not implemented in Controller can have res.send


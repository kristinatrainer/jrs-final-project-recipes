const axios = require('axios');
const URL = `http://localhost:8080/api`


function getAllMeals() {
    return axios.get(`${URL}/meals`)
}
function getMealsByGlutenFree() {
    return axios.get(`${URL}/meals/glutenfree`)
}

// does this comment of pamams match the JSON objet? Or not neccessary?
/**
 * 
 * @param {Meal} meal
 * @param {string} meal.name
 * @param {number} meal.difficulty
 * @param {object} meal.ingredients[]
 * @param {string} meal.ingredients[].name
 * @param {string} meal.ingredients[].category
 * @param {string} meal.instructions[]
 * @param {string} meal.mealType
 * @param {number} meal.estimatedTime
 * @param {string} meal.tools[]
 * @param {boolean} meal.glutenFree
 * @param {boolean} meal.vegan

 * @returns meal contents for database
 */
function addNewMeal (meal) {
    return axios.post(`${URL}/meals`, meal )
}

class Meal {
    "name"
    "difficulty"
    "ingredients"
    "instructions"
    "mealType"
    "estimatedTime"
    "cuisine"
    "tools"
    "glutenFree"
    "vegan"
}



const api = {
    getAllMeals,
    addNewMeal,
    getMealsByGlutenFree
}

function useAxios() {
    return api;
}

export { useAxios };

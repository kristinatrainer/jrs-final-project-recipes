export class Meal {
    name;//string
    difficulty;//number
    ingredients;//array
    instructions; //string
    mealType; //string
    estimatedTime; //number
    cuisine; // string
    tools; // string
    glutenFree; //boolean
    vegan;// boolean

    constructor(){
        this.name = 'default name';
        this.ingredients = [];
        this.instructions =[];
        this.tools =[];

    }

}
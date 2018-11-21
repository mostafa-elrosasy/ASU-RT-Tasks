import {Recipe} from "./recipe.model";
import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "../../../node_modules/rxjs";
@Injectable()
export class RecipeService{

    recipesChanged= new Subject<Recipe[]>();

    recipes: Recipe[]=[
        new Recipe('A test recipe','this is a test',
        'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg',
        [new Ingredient('Meat',1), new Ingredient('tomato',2)]),
        new Recipe('A test recipe','this is a test',
        'https://img.delicious.com.au/52hfFIjf/h506-w759-cfill/del/2017/05/one-pot-butter-chicken-with-dill-yoghurt-46876-2.jpg',
        [new Ingredient('Meat',2), new Ingredient('tomato',3)])
      ];

      constructor(private slService: ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(recipes.slice());
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
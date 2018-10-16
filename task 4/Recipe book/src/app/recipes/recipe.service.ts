import {Recipe} from "./recipe.model";
import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
@Injectable()
export class RecipeService{

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

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
}
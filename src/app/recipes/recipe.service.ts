import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    // recipes: Recipe[]  = [
    //     new Recipe('A Chicken Recipe','Spicy','https://cdn.cdkitchen.com/recipes/images/2016/02/121644-4758-mx.jpg',[
    //         new Ingredient ('Chiken',1),
    //         new Ingredient ('spices',1),
    //     ]),
    //     new Recipe('A Chicken Crispy','Crispy','https://www.maangchi.com/wp-content/uploads/2014/12/seasoned-fried-chicken.jpg',
    //     [ 
    //         new Ingredient ('Chiken',2),
    //         new Ingredient ('spices',1)
    //     ]),
    //  ] ;

    private recipes: Recipe[]=[];

    constructor(private shoppingListService:ShoppingListService){}

    setRecipes(recipes:Recipe[])
    {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
    addIngredientToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
    }
    addRecipe(recipe:Recipe)
    {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe)
    {
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());

    }
    deleteRecipe(index:number)
    {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());

    }
}
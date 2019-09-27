import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage-service';
import { RecipeService } from './recipe.service';

//this for remove bug (routing)
//here we use Resolve interface for resolve 
@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]>
{
    constructor(private dataStorageService:DataStorageService,
        private recipeService:RecipeService){}

    resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
        const recipe = this.recipeService.getRecipes();
        if(recipe.length === 0)
        {
            return this.dataStorageService.getRecipe();
        }
        else
        {
            return recipe;
        }
        
    }
}
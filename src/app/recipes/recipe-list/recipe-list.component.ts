import { Component, OnInit,EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[];
  subscription:Subscription;
    // = [
    // new Recipe('A Chicken Recipe','Spicy','https://cdn.cdkitchen.com/recipes/images/2016/02/121644-4758-mx.jpg'),
    // new Recipe('A Chicken Crispy','Crispy','https://www.maangchi.com/wp-content/uploads/2014/12/seasoned-fried-chicken.jpg'),
//  ] ;
  constructor(private recipeServices:RecipeService,
              private routes: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
     this.subscription=this.recipeServices.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes =recipes;
      }
    );
    this.recipes = this.recipeServices.getRecipes();
  }

  onNewRecipe()
  {
      this.router.navigate(['new'],{relativeTo:this.routes});
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  // onRecipeSelected(recipe : Recipe)
  // {
  //     this.recipeWasSelected.emit(recipe);
  // }
}

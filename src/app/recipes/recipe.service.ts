import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';


@Injectable()
export class RecipeService{


    private recipes: Recipe[] = [
        new Recipe('A test', 
        'this is a simple test', 
        'https://www.simplyrecipes.com/thmb/1KOEQ0SPZNXwU0pUXUDdAm6Z7xo=/2001x2001/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
        [new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
        ]
        ),

        new Recipe('B test', 
        'this is a simple test', 
        'https://www.simplyrecipes.com/thmb/1KOEQ0SPZNXwU0pUXUDdAm6Z7xo=/2001x2001/smart/filters:no_upscale()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
        [new Ingredient('Damn', 2),
        new Ingredient('Girl', 5)
        ]
        )
      ];

      constructor(private slService : ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientToSl(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      
}
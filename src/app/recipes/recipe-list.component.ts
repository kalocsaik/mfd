import { Component } from '@angular/core';
import { IRecipe} from './recipe';
import { RECIPESDATA } from '../shared/data';
import { DemoDataService } from "../shared/demo-data.service";


@Component({
  selector: 'recipe-list',
  moduleId: module.id,
  templateUrl: "recipe-list.component.html"
})

export class RecipeListComponent  { name = 'Angular';
        recipes: IRecipe[];
        pagetitle: string = "Recipes";

        constructor(private demoDataService: DemoDataService ){

        }

        ngOnInit(){
          this.recipes = this.demoDataService.getDemoData();
          this.recipes = RECIPESDATA;
        }

      /*  totalTimeforRecipe(recipe:IRecipe): number {
          return recipe.preptime + recipe.cookingtime;
        }*/

        likeRecipe(recipe:IRecipe) : void {
          recipe.likes++;
        }
}

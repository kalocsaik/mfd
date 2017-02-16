import { Injectable } from "@angular/core";
import { RECIPESDATA } from "./data";
import { IRecipe } from "../recipes/recipe";

@Injectable()

export class DemoDataService{
  getDemoData() : IRecipe[]{
    return RECIPESDATA;
  }

  getDemoDataById(recipeid: number){
    return RECIPESDATA.find(r => r.id == recipeid)
  }
}

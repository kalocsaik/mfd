import { Component} from "@angular/core";
import { Router, ActivatedRoute} from "@angular/router";
import { IRecipe } from "./recipe";
import { DemoDataService } from "../shared/demo-data.service";

@Component({
  template: `
  <div class="wrapper-full detail-item border-shadow">
      <div class="wrapper">
        <div class="row">
          <div class="small-12 large-6">

            <div class="small-12 large-6 detail-item-selected"><img src="{{recipe.imagetwo}}" alt="Shoe big" class=""></div>

            <div class="row detail-item-small">
              <div class="small-4 large-4"><img src="{{recipe.image}}" alt="Shoe big"></div>
              <div class="small-4 large-4"><img src="{{recipe.image}}" alt="Shoe big"></div>
              <div class="small-4 large-4"><img src="{{recipe.image}}" alt="Shoe big"></div>
            </div>

          </div>

          <div class="small-12 large-6 detail-item-description">
            <h2>{{recipe.name}}</h2>
            <div class="row item-description-main-price">
                <div class="small-12 large-6">
                <img src="{{recipe.brand}}" alt="">
                </div>
                <div class="small-12 large-6 text-align-right">
                  <p class="new-price">kr 947.90</p>
                </div>
              </div>
              <div class="row">
                <div class="small-12 large-12 text-align-right">
                  <span class="old-price">kr {{recipe.price}}</span><br>
                  <span class="price-save">You save 15.00% </span><br>
                </div>
            </div>
            <div class="row item-description-input">
              <div class="small-8 large-9"><label for="size">Size</label><br><input type="text" name="size" placeholder="EU Black 45"></div>
              <div class="small-4 large-3 text-align-right"><label for="amount">Amount</label><br><input type="text" name="amount" placeholder="1" class="amount"></div>
            </div>
            <div class="row">
              <div class="small-12 large-12 text-align-right detail-button"><a href="#">Buy Now</a></div>
            </div>

          </div>

        </div>


        <div class="row item-tabs">
          <div class="small-12 large-12">
            <div id="tabs">
              <ul>
                <li class="tabs active"><a href="/product/{{recipeid}}#tabs-1">Description</a></li>
                <li class="tabs"><a href="/product/{{recipeid}}#tabs-2">Shipping</a></li>
                <li class="tabs"><a href="/product/{{recipeid}}#tabs-3">Sizing</a></li>
              </ul>

              <div id="tabs-1" class="detail-tabs">
                <p>{{recipe.longdescription}}</p>
              </div>
              <!--<div id="tabs-2" class="detail-tabs">
              <p>{{recipe.longdescription}}</p>
              </div>
              <div id="tabs-3" class="detail-tabs">
                <p>{{recipe.longdescription}}</p>
              </div>-->
            </div>

          </div>
        </div>

      </div>
    </div>

  `
})

export class RecipeDetailComponent {
  recipeid: number;
  recipe: IRecipe;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _demoDataService: DemoDataService){
  }


  ngOnInit(){
    this.recipeid = +this._route.snapshot.params['id'];
    this.recipe = this._demoDataService.getDemoDataById(this.recipeid);
  }

}

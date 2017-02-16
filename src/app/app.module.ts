import { Injectable } from "@angular/core";
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail.component';
import { HeaderComponent } from "./shared/header.component";
import { HeroComponent } from "./shared/hero.component";
import { NewsletterComponent } from "./shared/newsletter.component";
import { FooterComponent } from "./shared/footer.component";
import { DemoDataService } from "./shared/demo-data.service";




@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                    { path: 'home', component: RecipeListComponent },
                    { path: 'product/:id', component: RecipeDetailComponent},
                    { path: '', redirectTo: 'home', pathMatch: 'full'},
                    { path: '**', redirectTo: 'home', pathMatch: 'full'}
                  ])
    ],
  declarations: [ AppComponent, RecipeListComponent, HeaderComponent, HeroComponent, RecipeDetailComponent, FooterComponent, NewsletterComponent ],
  providers: [ DemoDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

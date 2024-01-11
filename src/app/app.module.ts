import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from '../Components/category/category.component';
import { CardProduitComponent } from '../Components/card-produit/card-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CardProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { NewPromotionComponent } from './new-promotion/new-promotion.component';
import { routing } from "./app.routing";
import { PromotionService } from './promotion.service';

@NgModule({
  declarations: [
    AppComponent,
    PromotionComponent,
    PromotionsComponent,
    NewPromotionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

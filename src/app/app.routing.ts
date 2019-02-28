import {Routes, RouterModule} from "@angular/router";
import { PromotionsComponent } from "./promotions/promotions.component";
import { NewPromotionComponent } from "./new-promotion/new-promotion.component";
import { ModuleWithProviders } from "@angular/core";
const APP_ROUTES: Routes = [
    { path : '', component: PromotionsComponent},
    { path : 'new-promotion', component: NewPromotionComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
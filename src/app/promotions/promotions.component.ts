import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Promotion } from "../promotion.interface";
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  
  promotions:Promotion[];
  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
  }
  //this onGetMethod is hooked up with promotions to display an array of promotions and then these promotions are loop through to replicate the single promotion component
  onGetPromotions(){
    this.promotionService.getPromotions()
    .subscribe(
      (promotions: Promotion[]) => this.promotions = promotions,
      (error : Response) => console.log(error)
    );
  }

  onDeleted(promotion: Promotion){
    const position = this.promotions.findIndex(
      (promotionEl: Promotion) => {
        return promotionEl.id == promotion.id;
      }
    );
    this.promotions.splice(position,1);
  }
}


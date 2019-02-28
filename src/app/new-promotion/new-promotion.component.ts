import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.css']
})
export class NewPromotionComponent implements OnInit {

  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    //content is used cz we have given the input the name of the content
    this.promotionService.addPromotion(form.value.content)
    .subscribe(
      () => alert('Promotion Created!')
    );
    form.reset();
  }
}


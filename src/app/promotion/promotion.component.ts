import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Promotion } from "../promotion.interface";
import { PromotionService } from '../promotion.service';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  //input method is used to bind it from outside
  @Input() promotion : Promotion;
  @Output() promotionDeleted = new EventEmitter<Promotion>();
  editing = false; //when we are not editing
  editValue = '';

  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
  }
//Edit Method
  onEdit(){
    this.editing = true;
    this.editValue = this.promotion.content;
  }
//Update Method
  onUpdate(){
    this.promotionService.updatePromotion(this.promotion.id, this.editValue)
    .subscribe(
      (promotion: Promotion) => {
        this.promotion.content = this.editValue;
        this.editValue ='';
      }
    );   
    this.editing = false;
  }

  onCancel(){
    this.editValue = '';
    this.editing = false;
  }

  onDelete(){
    this.promotionService.deletePromotion(this.promotion.id)
    .subscribe(
      () => {
        this.promotionDeleted.emit(this.promotion);
        console.log('Promotion Deleted')
      }
    );
  }

}

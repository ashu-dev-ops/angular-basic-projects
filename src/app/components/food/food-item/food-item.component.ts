import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent {
  @Input() food!: string;
  @Output() deleteFood = new EventEmitter<any>();
  onDelete() {
    this.deleteFood.emit(this.food);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css'],
})
export class FoodFormComponent {
  foodForm = new FormGroup({
    food: new FormControl(''),
    // password: new FormControl(''),
  });
  foods: { food: string }[] = [];
  onSubmit() {
    this.foods.push({ food: this.foodForm.value.food as string });
  }
  onDeleteFood(event: any) {
    let temp: { food: string }[] = [];
    temp = this.foods.filter((i) => i.food !== event);
    this.foods = temp;
  }
}

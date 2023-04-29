import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  num: number = 0;
  msg: string = '';
  onAdd() {
    console.log(this.num);
    return this.num++;
  }
  onSub() {
    if (this.num > 0) {
      return this.num--;
    } else {
      return null;
    }
  }
  // ref var
  // onInput(infoRef: any) {
  //   console.log(infoRef.target.value);
  //   this.msg = infoRef.target.value;
  // }
  // .target not required
  onInput(infoRef: any) {
    console.log(infoRef.value);
    this.msg = infoRef.value;
  }
  uname: string = '';
}

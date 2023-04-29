import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-weight-convertor',
  templateUrl: './weight-convertor.component.html',
  styleUrls: ['./weight-convertor.component.css'],
})
export class WeightConvertorComponent {
  weightForm = new FormGroup({
    weight: new FormControl(''),
    // password: new FormControl(''),
  });
  weight: any;
  onSubmit() {
    // console.log(this.loginForm.value);
    if (this.weightForm.valid) {
      // this.auth.login(this.loginForm.value).subscribe(
      //   (result) => {
      //     console.log(result);
      //     this.router.navigate(['/private']);
      //   },
      //   (err: Error) => {
      //     alert(err.message);
      //   }
      // );
      if (this.weightForm.value) {
        // this.weight = this.weightForm.value.weight * 0.453592;
        this.weight =
          typeof this.weightForm.value.weight === 'number'
            ? this.weightForm.value.weight * 0.453592
            : Number(this.weightForm.value.weight) * 0.453592;
      }
    }
  }
}

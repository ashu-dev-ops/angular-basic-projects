import { Component } from '@angular/core';
// import {FormGroup}
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/private']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}

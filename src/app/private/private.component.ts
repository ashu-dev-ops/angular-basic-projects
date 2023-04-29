import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  products: {
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }[] = [];

  constructor(private auth: AuthService, private router: Router) {}
  onLogout() {
    this.auth.logout();
  }
  ngOnInit(): void {
    // this.message = this._msgService.message;
    // this.products = this._msgService.product;
    this.auth.pro().subscribe((data) => console.log(data.data));
    this.auth.pro().subscribe((data) => (this.products = data.data));
    // console.log(this.products);
  }
}

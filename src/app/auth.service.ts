import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  pro(): Observable<any> {
    return this.http.get('https://reqres.in/api/login');
  }
  weather(city: any): Observable<any> {
    console.log(city);
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=863242cfb2b1d357e6093d9a4df19a4b`
    );
  }
  login({ email, password }: any): Observable<any> {
    if (email === 'eve.holt@reqres.in' && password === 'pistol') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'pistol king', email: 'eve.holt@reqres.in' });
    }
    return throwError(new Error('Failed to login'));
  }
}

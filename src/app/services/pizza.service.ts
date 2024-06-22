import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzasData() {
    return this.http.get('http://localhost:3000/pizza-api/getPizzaData');
  }

  getToppingsData() {
    return this.http.get('http://localhost:3000/pizza-api/getToppingsData');
  }

}

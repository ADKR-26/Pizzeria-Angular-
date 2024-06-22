import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.scss'],
})
export class OrderPizzaComponent {
  pizzaData: any[] = [];

  constructor(private pizzaService: PizzaService, private cartService: CartService) {}

  sendPizzaDataToCart(pizza: any) {
    this.cartService.addToCart(pizza);
  }

  isInCart(pizza: any) {
    return this.cartService.isInCart(pizza);
  }


  ngOnInit(): void {
    this.pizzaService.getPizzasData().subscribe((data:any) => this.pizzaData = data);
  }
}

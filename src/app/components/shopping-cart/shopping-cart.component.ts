import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  pizzasInCart: any[] = [];
  toppingsInCart: any[] = [];
  totalPayment: number = 0;

  constructor(private cartService: CartService) {}

  deleteFromShoppingCart(pizza: any) {
    this.cartService.deleteFromCart(pizza);
    this.ngOnInit();
  }

  deleteToppingsFromShoppingCart(topping: any) {
    this.cartService.deleteToppingsFromCart(topping);
    this.ngOnInit();
  }

  confirmOrder() {
    setTimeout(() => {
      this.cartService.confirmOrder();
    }, 100);
  }

  increasePizzaCounter(pizza: any) {
    pizza.counter += 1;
    this.cartService.increasePriceBasedOnCounter(pizza);
    this.totalPayment = this.cartService.totalPayment;
  }

  decreasePizzaCounter(pizza: any) {
    if (pizza.counter > 1) {
      pizza.counter -= 1;
      this.cartService.decreasePriceBasedOnCounter(pizza);
      this.totalPayment = this.cartService.totalPayment;
    }
  }

  clearShoppingCart() {
    this.cartService.clearShoppingCart();
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.pizzasInCart = this.cartService.pizzaToShow;
    this.toppingsInCart = this.cartService.toppingsToShow;
    this.totalPayment = this.cartService.totalPayment;
  }
}

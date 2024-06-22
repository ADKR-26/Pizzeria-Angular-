import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  pizzaToShow: any[] = [];
  toppingsToShow: any[] = [];
  totalPayment: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.pizzaToShow = this.cartService.pizzaToShow;
    this.toppingsToShow = this.cartService.toppingsToShow;
    this.totalPayment = this.cartService.totalPayment;
  }
}

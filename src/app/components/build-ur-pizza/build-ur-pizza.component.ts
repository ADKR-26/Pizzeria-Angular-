import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { PizzaService } from 'src/app/services/pizza.service';

interface Topping {
  _id: string;
  tname: string;
  price: number;
  image: string;
  selected?: boolean;
}

@Component({
  selector: 'app-build-ur-pizza',
  templateUrl: './build-ur-pizza.component.html',
  styleUrls: ['./build-ur-pizza.component.scss'],
})
export class BuildUrPizzaComponent {
  availableToppings: any = [];
  selectedToppings: any = [];
  totalPrice: number = 0;

  constructor(
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {}

  // addTopping(data: Topping) {
  //   let toppings = {
  //     name: data.tname,
  //     price: data.price,
  //   };

  //   const index = this.selectedToppings.findIndex((item: any) => {
  //     item.name === data.tname;
  //   });

  //   if (index > -1) {
  //     this.selectedToppings.splice(index, 1);
  //     // this.selectedToppings = this.selectedToppings.filter((item: any) => {
  //     //   return item.name !== name;
  //     // });
  //     data.selected = false;

  //   } else {
  //     this.selectedToppings.push({ toppings });
  //     data.selected = true;
  //   }

  //   console.log('toppingsData(build): ', this.selectedToppings);
  // }

  addTopping(data: Topping) {
    const index = this.selectedToppings.findIndex(
      (item: any) => item.name === data.tname
    );

    const price = Number(data.price);

    if (index > -1) {
      // Remove the topping if it's already in the array
      data.selected = false;
      this.selectedToppings.splice(index, 1);
      this.totalPrice -= price;
    } else {
      // Add the topping if it's not in the array
      data.selected = true;
      this.totalPrice += price;
      this.selectedToppings.push({
        name: data.tname,
        price: data.price,
        checked: true,
      });
    }

    console.log('toppingsData(build): ', this.selectedToppings);
  }

  sendToppingsData() {
    this.cartService.addToppingsToCart(this.selectedToppings);
  }

  ngOnInit(): void {
    this.pizzaService
      .getToppingsData()
      .subscribe((data: any) => (this.availableToppings = data));
    this.selectedToppings = this.cartService.toppingsToShow;
    console.log('topping data after page switch: ', this.selectedToppings);
  }
}

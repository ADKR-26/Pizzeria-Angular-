import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  pizzaToShow: any[] = [
    {
      toppings: [],
      _id: '6676c346291a42d32abb0b07',
      id: '0001',
      type: 'veg',
      price: '290',
      name: 'Paneer Tikka',
      image:
        'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',
      description:
        'This is popular italian pizza flavoured with marinated tikka sauce and paneer',
      ingredients: [
        'dough/flour',
        'pizza saucce',
        'pizza sauce seasoning',
        'cheese',
      ],
      topping: [
        'Paneer',
        'Fried Onion',
        'Green olive',
        'Capsicum',
        'Red peprika',
      ],
      counter: 1,
    },
  ];
  toppingsToShow: any[] = [];
  totalPayment: number = 0;

  private cartLength = new BehaviorSubject<number>(0);

  constructor() {}

  //function to add or remove data in the shopping cart
  addToCart(pizza: any) {
    const price = Number(pizza.price);

    if (!this.isInCart(pizza)) {
      pizza.counter = 1;
      this.pizzaToShow.push(pizza);
      this.cartLength.next(this.pizzaToShow.length);
      this.totalPayment += price;
    } else {
      this.pizzaToShow = this.pizzaToShow.filter(
        (item: any) => item.name !== pizza.name
      );
      this.cartLength.next(this.pizzaToShow.length);
      this.totalPayment -= price;
    }
  }

  // function to add toppings data in the shopping cart
  addToppingsToCart(toppings: any) {
    this.toppingsToShow = toppings;
    this.toppingsToShow.forEach((topping) => {
      if (topping.checked) {
        this.totalPayment += Number(topping.price);
      }
    });
  }

  // function to get the length of the shopping cart
  getCartLength() {
    return this.cartLength.asObservable();
  }

  // function to delete the pizza from the shopping cart
  deleteFromCart(pizza: any) {
    this.pizzaToShow = this.pizzaToShow.filter(
      (item: any) => item.name !== pizza.name
    );
    this.cartLength.next(this.pizzaToShow.length);
    this.totalPayment -= Number(pizza.price) * pizza.counter;
  }

  deleteToppingsFromCart(topping: any) {
    this.toppingsToShow = this.toppingsToShow.filter((item: any) => {
      return item.name !== topping.name;
    });
    console.log('Toppings after deleting: ', topping);
    this.totalPayment -= Number(topping.price);
  }

  confirmOrder() {
    this.pizzaToShow = [];
    this.toppingsToShow = [];
    this.totalPayment = 0;
    this.cartLength.next(0);
  }

  increasePriceBasedOnCounter(pizza: any) {
    console.log('Methods called');
    this.totalPayment += Number(pizza.price);
  }

  decreasePriceBasedOnCounter(pizza: any) {
    this.totalPayment -= Number(pizza.price);
  }

  clearShoppingCart() {
    this.pizzaToShow = [];
    this.toppingsToShow = [];
    this.totalPayment = 0;
    this.cartLength.next(0);
  }

  // function to check if the pizza is already in the shopping cart
  isInCart(pizza: any) {
    return this.pizzaToShow.indexOf(pizza) !== -1;
  }
}

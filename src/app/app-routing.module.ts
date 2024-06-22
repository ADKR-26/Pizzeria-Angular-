import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OrderPizzaComponent } from './components/order-pizza/order-pizza.component';
import { BuildUrPizzaComponent } from './components/build-ur-pizza/build-ur-pizza.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'order-pizza', component: OrderPizzaComponent },
  { path: 'build-ur-pizza', component: BuildUrPizzaComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

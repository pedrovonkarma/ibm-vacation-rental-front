import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateBookingComponent } from './pages/create-booking/create-booking.component';
import { ShowBookingComponent } from './pages/show-booking/show-booking.component';

const routes: Routes = [
  {path: '', component: ShowBookingComponent},
  {path: 'cadastrar', component: CreateUserComponent},
  {path: 'reservar', component: CreateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

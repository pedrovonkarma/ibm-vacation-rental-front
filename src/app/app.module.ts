import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EditableBookingCardComponent } from './components/editable-booking-card/editable-booking-card.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreateBookingComponent } from './pages/create-booking/create-booking.component';
import { ShowBookingComponent } from './pages/show-booking/show-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingCardComponent,
    UserFormComponent,
    EditableBookingCardComponent,
    BookingFormComponent,
    CreateUserComponent,
    CreateBookingComponent,
    ShowBookingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

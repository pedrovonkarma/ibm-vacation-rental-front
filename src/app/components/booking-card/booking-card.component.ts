import { Component, Input } from '@angular/core';
import { IBooking } from 'src/app/models/bookingInterfaces';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent {
  @Input() bookingItem: any;

  constructor() {
    this.bookingItem = {};
  }

}

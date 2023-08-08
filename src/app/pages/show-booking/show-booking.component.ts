import { Component } from '@angular/core';
import { IBooking } from 'src/app/models/bookingInterfaces';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-show-booking',
  templateUrl: './show-booking.component.html',
  styleUrls: ['./show-booking.component.css']
})
export class ShowBookingComponent {

  list: IBooking[] = []

  constructor(private service: BookingService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      console.log(this.list)
    })
  }

}

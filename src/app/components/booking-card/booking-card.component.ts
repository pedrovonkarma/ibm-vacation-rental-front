import { Component, Input } from '@angular/core';
import { IBooking } from 'src/app/models/bookingInterfaces';
import { ShowBookingComponent } from 'src/app/pages/show-booking/show-booking.component';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent {
  @Input() bookingItem: any;

  isEditing = false;

  constructor(private bookingService: BookingService, private showBookingComponent: ShowBookingComponent) {
    this.bookingItem = {};
  }

  edit(){
    this.isEditing = true;
  }

  onDeleteBooking(bookingId: number) {
    const confirmDelete = window.confirm('Tem certeza de que deseja cancelar esta reserva?');
  
    if (confirmDelete) {
      this.bookingService.deleteBooking(bookingId).subscribe(
        response => {
          if (response.status === 200) {
            alert('Reserva cancelada com sucesso!');
            this.showBookingComponent.findAll();
          } else {
            console.log('Ocorreu um erro ao cancelar a reserva.');
          }
        },
        error => {
          console.error('Erro ao cancelar a reserva:', error);
        }
      );
    }
  }

}

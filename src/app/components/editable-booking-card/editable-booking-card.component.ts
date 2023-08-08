import { Component, Input } from '@angular/core';
import { BookingCardComponent } from '../booking-card/booking-card.component';
import { BookingService } from 'src/app/services/booking.service';
import { IBooking } from 'src/app/models/bookingInterfaces';

@Component({
  selector: 'app-editable-booking-card',
  templateUrl: './editable-booking-card.component.html',
  styleUrls: ['./editable-booking-card.component.css']
})
export class EditableBookingCardComponent {

  @Input() bookingItem: any;

  isSubmitting = false;

  booking: IBooking = {
    nomeHospede: '',
    dataInicio: '',
    dataFim: '',
    quantidadePessoas: 1,
    status: ''
  };

  constructor(
    private bookingCardComponent: BookingCardComponent,
    private bookingService: BookingService
    ) {
    this.bookingItem = {};
  }

  exitEdit(){
    this.bookingCardComponent.isEditing = false;
  }

  onSubmit(id: number) {

    this.booking.nomeHospede = this.bookingItem.nomeHospede;
    this.booking.dataInicio = this.bookingItem.dataInicio;
    this.booking.dataFim = this.bookingItem.dataFim;
    this.booking.quantidadePessoas = this.bookingItem.quantidadePessoas;
    this.booking.status = this.bookingItem.status;

    this.isSubmitting = true;
    this.bookingService.updateBooking(id, this.booking).subscribe(
      response => {
        if (response.status === 200) {
          alert('Reserva alterada com sucesso!');
          this.isSubmitting = false;
          this.bookingCardComponent.isEditing = false;
        } else {
          console.log('Ocorreu um erro ao alterar reserva.');
        }
        this.isSubmitting = false;

      },
      error => {
        console.error('Erro ao alterar reserva:', error);
        this.isSubmitting = false;
      }
    );
  }

}

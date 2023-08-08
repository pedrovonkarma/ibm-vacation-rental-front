import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBooking } from 'src/app/models/bookingInterfaces';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {
  isSubmitting = false;

  booking: IBooking = {
    nomeHospede: '',
    dataInicio: '',
    dataFim: '',
    quantidadePessoas: 1,
  };

  constructor(
    private bookingService: BookingService,
    private router: Router
    ) { }

  onSubmit() {
    this.isSubmitting = true;
    this.bookingService.createBooking(this.booking).subscribe(
      response => {
        if (response.status === 201) {
          alert('Reserva cadastrada com sucesso!');
          this.router.navigate(['/']);
        } else {
          console.log('Ocorreu um erro ao cadastrar o usuário.');
        }
        this.isSubmitting = false;

      },
      error => {
        console.error('Erro ao cadastrar o usuário:', error);
        this.isSubmitting = false;
      }
    );
  }
}

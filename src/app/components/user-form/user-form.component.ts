import { Component } from '@angular/core';
import { IUser } from 'src/app/models/userInterfaces';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  isSubmitting = false;

  user: IUser = {
    name: '',
    email: '',
    phoneNumber: ''
  };

  constructor(
    private bookingService: BookingService,
    private router: Router
    ) { }

  onSubmit() {
    this.isSubmitting = true;
    this.bookingService.createUser(this.user).subscribe(
      response => {
        if (response.status === 201) {
          alert('Usuário cadastrado com sucesso!');
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

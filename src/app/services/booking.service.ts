import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IBooking } from '../models/bookingInterfaces';
import { IUser } from '../models/userInterfaces';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) { }

    findAll(): Observable<IBooking[]> {
        const url = `${this.baseUrl}reservas`;
        return this.http.get<IBooking[]>(url);
    }

    createUser(user: IUser): Observable<any> {
        const url = `${this.baseUrl}auth/signup`;
        return this.http.post(url, user, { observe: 'response' });
      }


}
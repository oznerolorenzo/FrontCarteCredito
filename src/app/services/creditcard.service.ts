import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreditcardService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${environment.HOST_DOMAIN}/api`;

  getAll(limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/credit-cards/lista?max=${limit}`);
  }

  addCard(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/credit-cards/creare`, data);
  }

  searchByLastName(lastName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/credit-cards/cercare?cognome=${lastName}`);
  }

  checkExpiry(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/credit-cards/scaduta/${id}`);
  }
  addRicarica(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ricariche/crea`, data);
  }

  getRicaricheByCartaCreditoID(cartaCreditoID: number, max: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/ricariche/list?cartaCreditoID=${cartaCreditoID}&max=${max}`);
  }

  getRicaricheBetweenDates(cartaCreditoID: number, dataMin: string, dataMax: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ricariche/ricerca-date?cartaCreditoID=${cartaCreditoID}&dataMin=${dataMin}&dataMax=${dataMax}`);

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreditcardService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${environment.HOST_DOMAIN}/api/credit-cards`;

  getAll(limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista?max=${limit}`);
  }

  addCard(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/creare`, data);
  }

  searchByLastName(lastName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cercare?cognome=${lastName}`);
  }

  checkExpiry(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/scaduta/${id}`);
  }
}

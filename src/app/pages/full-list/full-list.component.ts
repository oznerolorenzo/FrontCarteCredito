import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.css']
})
export class FullListComponent implements OnInit {
  creditCards: any[] = [];
  limit = 50;

  constructor(private creditCardService: CreditcardService) { }

  ngOnInit(): void {
    this.fetchCreditCards();
  }

  fetchCreditCards() {
    this.creditCardService.getAll(this.limit).subscribe((data: any[]) => {
      this.creditCards = data;
    }, error => {
      console.error('Errore durante il recupero delle carte di credito:', error);
    });
  }
}

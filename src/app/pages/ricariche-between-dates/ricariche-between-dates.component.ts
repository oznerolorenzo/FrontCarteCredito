import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-ricariche-between-dates',
  templateUrl: './ricariche-between-dates.component.html',
  styleUrls: ['./ricariche-between-dates.component.css']
})
export class RicaricheBetweenDatesComponent implements OnInit {
  searchForm: FormGroup;
  ricariche: any[] = [];

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.searchForm = this.fb.group({
      cartaCreditoID: ['', Validators.required],
      dataMin: ['', Validators.required],
      dataMax: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSearch() {
    if (this.searchForm.valid) {
      const cartaCreditoID = this.searchForm.get('cartaCreditoID')?.value;
      const dataMin = this.searchForm.get('dataMin')?.value;
      const dataMax = this.searchForm.get('dataMax')?.value;
      this.creditCardService.getRicaricheBetweenDates(cartaCreditoID, dataMin, dataMax).subscribe(
        (data: any[]) => {
          this.ricariche = data;
        },
        (error) => {
          console.error('Errore durante la ricerca delle ricariche:', error);
        }
      );
    }
  }
}

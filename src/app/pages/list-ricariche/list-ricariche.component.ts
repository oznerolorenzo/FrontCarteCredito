import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-list-ricariche',
  templateUrl: './list-ricariche.component.html',
  styleUrls: ['./list-ricariche.component.css']
})
export class ListRicaricheComponent implements OnInit {
  searchForm: FormGroup;
  ricariche: any[] = [];
  maxResults = 10;

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.searchForm = this.fb.group({
      cartaCreditoID: ['', Validators.required],
      max: [this.maxResults, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSearch() {
    if (this.searchForm.valid) {
      const cartaCreditoID = this.searchForm.get('cartaCreditoID')?.value;
      const max = this.searchForm.get('max')?.value;
      this.creditCardService.getRicaricheByCartaCreditoID(cartaCreditoID, max).subscribe(
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

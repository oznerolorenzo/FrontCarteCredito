import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-list-ricariche',
  templateUrl: './list-ricariche.component.html',
  styleUrls: ['./list-ricariche.component.css']
})
export class ListRicaricheComponent implements OnInit {
  ricaricheForm: FormGroup;
  ricariche: any[] = [];

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.ricaricheForm = this.fb.group({
      cartaCreditoID: ['', Validators.required],
      maxRicariche: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  onSearch() {
    if (this.ricaricheForm.valid) {
      const cartaCreditoID = this.ricaricheForm.get('cartaCreditoID')?.value;
      const maxRicariche = this.ricaricheForm.get('maxRicariche')?.value;
      this.creditCardService.getRicaricheByCartaCreditoID(cartaCreditoID, maxRicariche).subscribe(
        (data: any[]) => {
          this.ricariche = data;
        },
        (error) => {
          console.error('Errore durante il recupero delle ricariche:', error);
        }
      );
    }
  }
}

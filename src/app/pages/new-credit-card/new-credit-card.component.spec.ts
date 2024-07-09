import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-new-credit-card',
  templateUrl: './new-credit-card.component.html',
  styleUrls: ['./new-credit-card.component.css']
})
export class NewCreditCardComponent implements OnInit {
  cardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.cardForm = this.fb.group({
      numeroCartaCredito: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      titolare: ['', Validators.required],
      scadenza: ['', Validators.required],
      creditoResiduo: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.cardForm.valid) {
      const newCard = this.cardForm.value;
      newCard.scadenza = new Date(newCard.scadenza); // Assicurati che la data sia in un formato valido
      this.creditCardService.addCard(newCard).subscribe(response => {
          console.log('Nuova carta aggiunta:', response);
          this.cardForm.reset();
        },
        error => {
          console.error('Errore durante l\'aggiunta della carta:', error);
        });
    }
  }
}

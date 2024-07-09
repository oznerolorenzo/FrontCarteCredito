import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-check-expired',
  templateUrl: './check-expired.component.html',
  styleUrls: ['./check-expired.component.css']
})
export class CheckExpiredComponent {
  checkForm: FormGroup;
  isExpired: boolean | null = null;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.checkForm = this.fb.group({
      cardId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onCheck() {
    this.isExpired = null; // Reset previous result
    this.errorMessage = '';

    if (this.checkForm.valid) {
      const cardId = this.checkForm.get('cardId')?.value;
      this.creditCardService.checkExpiry(cardId).subscribe(
        (response: any) => {
          this.isExpired = response.isExpired;
        },
        (error) => {
          this.errorMessage = 'Errore durante la verifica della scadenza della carta. Assicurati che l\'ID sia corretto.';
          console.error('Errore durante la verifica della scadenza della carta:', error);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-new-ricarica',
  templateUrl: './new-ricarica.component.html',
  styleUrls: ['./new-ricarica.component.css']
})
export class NewRicaricaComponent implements OnInit {
  ricaricaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.ricaricaForm = this.fb.group({
      cartaCreditoID: ['', Validators.required],
      dataRicarica: ['', Validators.required],
      importoRicarica: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.ricaricaForm.valid) {
      const newRicarica = this.ricaricaForm.value;
      this.creditCardService.addRicarica(newRicarica).subscribe(response => {
          console.log('Nuova ricarica aggiunta:', response);
          this.ricaricaForm.reset();
        },
        error => {
          console.error('Errore durante l\'aggiunta della ricarica:', error);
        });
    }
  }
}

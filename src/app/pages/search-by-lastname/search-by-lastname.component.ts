import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardService } from '../../services/creditcard.service';

@Component({
  selector: 'app-search-by-lastname',
  templateUrl: './search-by-lastname.component.html',
  styleUrls: ['./search-by-lastname.component.css']
})
export class SearchByLastnameComponent implements OnInit {
  searchForm: FormGroup;
  results: any[] = [];

  constructor(
    private fb: FormBuilder,
    private creditCardService: CreditcardService
  ) {
    this.searchForm = this.fb.group({
      lastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSearch() {
    if (this.searchForm.valid) {
      const lastName = this.searchForm.get('lastName')?.value;
      this.creditCardService.searchByLastName(lastName).subscribe(
        (data: any[]) => {
          this.results = data;
        },
        (error) => {
          console.error('Errore durante la ricerca delle carte di credito:', error);
        }
      );
    }
  }
}

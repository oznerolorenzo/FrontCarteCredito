import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullListComponent } from '../app/pages/full-list/full-list.component';
import { NewCreditCardComponent } from '../app/pages/new-credit-card/new-credit-card.component';
import { SearchByLastnameComponent } from '../app/pages/search-by-lastname/search-by-lastname.component';
import { CheckExpiredComponent } from '../app/pages/check-expired/check-expired.component';

const routes: Routes = [
  { path: 'list', component: FullListComponent },
  { path: 'create', component: NewCreditCardComponent },
  { path: 'search', component: SearchByLastnameComponent },
  { path: 'check', component: CheckExpiredComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

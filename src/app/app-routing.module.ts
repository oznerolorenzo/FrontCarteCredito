import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullListComponent } from '../app/pages/full-list/full-list.component';
import { NewCreditCardComponent } from '../app/pages/new-credit-card/new-credit-card.component';
import { SearchByLastnameComponent } from '../app/pages/search-by-lastname/search-by-lastname.component';
import { CheckExpiredComponent } from '../app/pages/check-expired/check-expired.component';
import { HomeComponent } from './pages/home/home.component';
import { NewRicaricaComponent } from './pages/new-ricarica/new-ricarica.component';
import { ListRicaricheComponent } from './pages/list-ricariche/list-ricariche.component';
import { RicaricheBetweenDatesComponent } from './pages/ricariche-between-dates/ricariche-between-dates.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: FullListComponent },
  { path: 'create', component: NewCreditCardComponent },
  { path: 'search', component: SearchByLastnameComponent },
  { path: 'check', component: CheckExpiredComponent },
  { path: 'new-ricarica', component: NewRicaricaComponent },
  { path: 'list-ricariche', component: ListRicaricheComponent },
  { path: 'ricariche-between-dates', component: RicaricheBetweenDatesComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

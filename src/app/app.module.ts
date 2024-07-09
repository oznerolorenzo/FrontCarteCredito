import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { HomeComponent } from './pages/home/home.component';
import { NewCreditCardComponent } from './pages/new-credit-card/new-credit-card.component';
import { SearchByLastnameComponent } from './pages/search-by-lastname/search-by-lastname.component';
import { CheckExpiredComponent } from './pages/check-expired/check-expired.component';
import { FullListComponent } from './pages/full-list/full-list.component';
import { NewRicaricaComponent } from './pages/new-ricarica/new-ricarica.component';
import { ListRicaricheComponent } from './pages/list-ricariche/list-ricariche.component';
import { RicaricheBetweenDatesComponent } from './pages/ricariche-between-dates/ricariche-between-dates.component';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavUserComponent,
    FullListComponent,
    IfAuthenticatedDirective,
    HomeComponent,
    NewCreditCardComponent,
    SearchByLastnameComponent,
    CheckExpiredComponent,
    NewRicaricaComponent,
    ListRicaricheComponent,
    RicaricheBetweenDatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

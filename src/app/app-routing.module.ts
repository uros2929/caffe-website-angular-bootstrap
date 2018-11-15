import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { TableReservationComponent } from './table-reservation/table-reservation.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"main", component:MainComponent},
  {path:"menu", component:MenuComponent},
  {path:"events", component:EventsComponent},
  {path:"tableReservation", component:TableReservationComponent},
  {path:"contact", component:ContactComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PaymentsComponent } from './payments/payments.component';
import { EventsComponent } from './events/events.component';
import { VotingComponent } from './voting/voting.component';

//#endregion NO GUARD YET!
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'voting', component: VotingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';

import { SlotsComponent } from './components/slots/slots.component';

export const routes: Routes = [
  {
    path: 'slots',
    component: SlotsComponent,
  },
  {
    path: '',
    redirectTo: 'slots',
    pathMatch: 'full',
  },
];

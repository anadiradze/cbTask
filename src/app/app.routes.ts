import { Routes } from '@angular/router';

import { SlotsComponent } from './components/slots/slots.component';
import { SlotsDetailComponent } from './components/slots/slots-detail/slots-detail.component';

export const routes: Routes = [
  {
    path: 'slots',
    component: SlotsComponent,
    children: [{ path: ':id', component: SlotsDetailComponent }],
  },
  {
    path: '',
    redirectTo: 'slots',
    pathMatch: 'full',
  },
];

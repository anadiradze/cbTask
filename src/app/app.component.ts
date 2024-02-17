import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlotsComponent } from './components/slots/slots.component';
import { SlotsDetailComponent } from './components/slots/slots-detail/slots-detail.component';
import { SlotsListComponent } from './components/slots/slots-list/slots-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SlotsDetailComponent,
    SlotsListComponent,
    SlotsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crocobet';
}

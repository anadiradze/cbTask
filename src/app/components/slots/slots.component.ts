import { Component, OnInit, Signal, inject } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SlotsListComponent } from './slots-list/slots-list.component';
import { SidenavComponent } from '../../shared/components/sidenav/sidenav.component';
import { SlotCardComponent } from '../../shared/components/slot-card/slot-card.component';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [HttpClientModule, CommonModule,SlotsListComponent,SidenavComponent, SlotCardComponent],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.css',
})
export class SlotsComponent {

 
}

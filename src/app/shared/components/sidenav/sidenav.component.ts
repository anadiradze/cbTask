import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [UpperCasePipe, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  navigationItems = [
    {
      name: 'sport',
      icon: 'assets/sidenav/sport.svg',
      link: '/slots',
      active: false,
    },
    {
      name: 'live',
      icon: 'assets/sidenav/live.svg',
      link: '/slots',
      active: false,
    },
    {
      name: 'slots',
      icon: 'assets/sidenav/slot.svg',
      link: '/slots',
      active: true,
    },
    {
      name: 'casino',
      icon: 'assets/sidenav/casino.svg',
      link: '/slots',
      active: false,
    },
  ];
}

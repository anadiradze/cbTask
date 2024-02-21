import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../shared/models/CategoriesResp.model';
import { GameProvider } from '../../shared/models/GameProviderResp.model';
import { CategoryService } from '../../shared/services/category.service';
import { ProviderService } from '../../shared/services/provider.service';
import { Router, RouterOutlet } from '@angular/router';
import { SlotsNavigatorComponent } from '../../shared/components/slots-navigator/slots-navigator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [
    HttpClientModule,
    HttpClientModule,
    CommonModule,
    SlotsNavigatorComponent,
    RouterOutlet,
  ],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.css',
})
export class SlotsComponent {
  constructor(
    private categoryService: CategoryService,
    private providerService: ProviderService,
    private router: Router
  ) {}
  filteredCategories$!: Observable<Category[]>;
  getProviders$!: Observable<GameProvider[]>;

  ngOnInit(): void {
    this.filteredCategories$ = this.categoryService.getCategories();
    this.getProviders$ = this.providerService.getProvidersList();
  }

  activeItemIdentifier: string | null = null;

  onCategoryClick(event: Category) {
    this.router.navigate(['/slots', 'category', event.category]);
    this.activeItemIdentifier = `category-${event.name}`;
  }
  onProviderClick(event: GameProvider) {
    this.router.navigate(['/slots', 'provider', event.provider]);
    this.activeItemIdentifier = `provider-${event.name}`;
  }
}

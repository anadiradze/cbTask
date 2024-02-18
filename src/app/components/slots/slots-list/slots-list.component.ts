import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Category } from '../../../shared/models/CategoriesResponse';
import { ProvidersComponent } from '../../../shared/components/providers/providers.component';
import { Observable } from 'rxjs';
import { ProviderService } from '../../../shared/services/provider.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TruncatePipe } from "../../../shared/pipes/truncate.pipe";
import { GameProvider } from '../../../shared/models/ProviderResponse';

@Component({
    selector: 'app-slots-list',
    standalone: true,
    templateUrl: './slots-list.component.html',
    styleUrl: './slots-list.component.css',
    imports: [
        HttpClientModule,
        CommonModule,
        ProvidersComponent,
        RouterLink,
        RouterOutlet,
        TruncatePipe
    ]
})
export class SlotsListComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private providerService: ProviderService
  ) {}
  filteredCategories$!: Observable<Category[]>;
  getProviders$!: Observable<GameProvider[]>;

  ngOnInit(): void {
    this.filteredCategories$ = this.categoryService.getCategories();
    this.getProviders$ = this.providerService.getProvidersList();
  }

  iconPaths=["../../../../assets/lists/star.svg" ,"../../../../assets/lists/new.svg" ,"../../../../assets/lists/buyBonus.svg" ]
}

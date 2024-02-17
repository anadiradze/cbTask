import {
  Component,
  Input,
  OnInit,
  Pipe,
  Signal,
  input,
  signal,
} from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Category } from '../../../shared/models/CategoriesResponse';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { Observable } from 'rxjs';
import { ProviderService } from '../../../shared/services/provider.service';

@Component({
  selector: 'app-slots-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, DropdownComponent],
  templateUrl: './slots-list.component.html',
  styleUrl: './slots-list.component.css',
})
export class SlotsListComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private providerService: ProviderService
  ) {}
  filteredCategories$!: Observable<Category[]>;
  getProviders$!: Observable<any>;

  ngOnInit(): void {
    this.filteredCategories$ = this.categoryService.getCategories();
    this.getProviders$ = this.providerService.getProvidersList();
  }

}

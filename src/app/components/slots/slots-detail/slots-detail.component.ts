import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { CategoryService } from '../../../shared/services/category.service';
import { CommonModule } from '@angular/common';
import { SlotCardComponent } from '../../../shared/components/slot-card/slot-card.component';
import { ProviderService } from '../../../shared/services/provider.service';
import { Game } from '../../../shared/models/Game.model';


@Component({
  selector: 'app-slots-detail',
  standalone: true,
  imports: [CommonModule, SlotCardComponent],
  templateUrl: './slots-detail.component.html',
  styleUrls: ['./slots-detail.component.css'],
})
export class SlotsDetailComponent implements OnInit {
  games$!: Observable<Game[]>;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private providerService: ProviderService
  ) {}

  ngOnInit(): void {
    this.games$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        const slotNavItem = params.get('slotNavItem');
        if (slotNavItem === 'category') {
          return this.categoryService.getGamesByCategoryId(id!);
        } else if (slotNavItem === 'provider') {
          return this.providerService.getGamesByProviderId(id!);
        }
        return of([]);
      })
    );
  }
}

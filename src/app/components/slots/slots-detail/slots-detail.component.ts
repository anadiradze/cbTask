import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, catchError, of, switchMap } from 'rxjs';
import { CategoryService } from '../../../shared/services/category.service';
import { CommonModule } from '@angular/common';
import { SlotCardComponent } from '../../../shared/components/slot-card/slot-card.component';
import { ProviderService } from '../../../shared/services/provider.service';
import {
  Game,
  SlotData,
} from '../../../shared/models/GamesbyProviderIdResponse';

@Component({
  selector: 'app-slots-detail',
  standalone: true,
  imports: [CommonModule, SlotCardComponent],
  templateUrl: './slots-detail.component.html',
  styleUrls: ['./slots-detail.component.css'],
})
export class SlotsDetailComponent implements OnInit {
  games: Game[] | any = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private providerService: ProviderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          const collection = params.get('collection');
          if (collection === 'categories') {
            return this.categoryService.getGamesByCategoryId(id!);
          } else if (collection === 'providers') {
            return this.providerService.getGamesByProviderId(id!);
          }
          return of([]);
        })
      )
      .subscribe({
        next: (games) => {
          this.games = games;
        },
        error: (error) => {
          console.error('Error fetching games:', error);
          this.games = [];
        },
      });
  }
}

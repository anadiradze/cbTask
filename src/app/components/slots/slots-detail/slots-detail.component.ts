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
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params) => {
    //       const id = params.get('id');
    //       return id ? this.categoryService.getGamesByCategoryId(id) : EMPTY;
    //     })
    //   )
    //   .subscribe((games) => {
    //     this.games = games;
    //   });

    // this.route.paramMap
    //   .pipe(
    //     switchMap((params) => {
    //       const id = params.get('id');
    //       return id ? this.providerService.getGamesByProviderId(id) : EMPTY;
    //     })
    //   )
    //   .subscribe((games: Game[]) => {
    //     this.games = games;
    //   });
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (id) {
            // Attempt to fetch games by provider ID, if fails, fetch by category ID
            return this.providerService.getGamesByProviderId(id).pipe(
              catchError(() => this.categoryService.getGamesByCategoryId(id))
            );
          }
          return of([]); // Returns an empty array if no ID is found
        })
      )
      .subscribe({
        next: (games) => {
          this.games = games;
        },
        error: (error) => {
          console.error('Error fetching games:', error);
          this.games = []; // Handle error scenario, possibly reset games array or show error message
        }
      });
  }
}

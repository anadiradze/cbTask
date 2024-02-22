//
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoriesResponse, Category } from '../models/CategoriesResp.model';
import { Game } from '../models/Game.model';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoriesResponse>(
        `${this.baseUrl}/v2/slot/categories?include=games`
      )
      .pipe(
        map((response) => {
          return response.data.filter((cat) =>
            ['web:popular', 'web:new_games', 'web:buy_bonus'].includes(
              cat.category
            )
          );
        }),
        catchError((error) => {
          console.error('Error fetching categories:', error);
          return of([]);
        })
      );
  }

  getGamesByCategoryId(categoryId: string): Observable<Game[]> {
    return this.getCategories().pipe(
      map((categories: Category[]) => {
        const category = categories.find((c) => c.category === categoryId);
        return category ? category.games : [];
      }),
      catchError((error) => {
        console.error('Error fetching games by category ID', error);
        return of([]);
      })
    );
  }
}

//
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoriesResponse, Category } from '../models/CategoriesResponse';

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
          console.log(response, 'respof CAT');
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

  getGamesByCategoryId(categoryId: string): Observable<any> {
    return this.getCategories().pipe(
      map((categories) => {
        const category = categories.find((c) => c.category === categoryId);
        console.log(category, 'category');
        return category ? category.games : of([]);
      })
    );
  }
}

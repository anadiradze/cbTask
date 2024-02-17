//
import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoriesResponse, Category } from '../models/CategoriesResponse';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = environment.baseUrl;

  //categoriesSignal: WritableSignal<Category[]> = signal([]);

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<CategoriesResponse>(
        `${this.baseUrl}/v2/slot/categories?include=games`
      )
      .pipe(
        map((response) =>
          response.data.filter(
            (cat) => !cat.category.toLowerCase().includes('mob')
          )
        ),
        catchError((error) => {
          console.error('Error fetching categories:', error);
          return of([]);
        })
      );
  }
}

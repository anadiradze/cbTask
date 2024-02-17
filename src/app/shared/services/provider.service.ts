import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  GameProvider,
  GameProvidersResponse,
} from '../models/providerResponse';
@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProvidersList(): Observable<GameProvider[]> {
    return this.http
      .get<GameProvidersResponse>(`${this.baseUrl}?type=slot&platform=desktop`)
      .pipe(map((resp) => resp.data));
  }

  getSlotsByProvider(providerId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/v2/slot/providers/${providerId}`);
  }
}

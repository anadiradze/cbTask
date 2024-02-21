import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {
  GameProvider,
  GameProvidersResponse,
} from '../models/GameProviderResp.model';
import {
  RootObject,
} from '../models/GamesbyProviderIdResp.model';
import { Game } from '../models/Game.model';
@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProvidersList(): Observable<GameProvider[]> {
    return this.http
      .get<GameProvidersResponse>(`${this.baseUrl}?type=slot&platform=desktop`)
      .pipe(
        map((resp) => {
          return resp.data;
        })
      );
  }

  getGamesByProviderId(providerId: string): Observable<Game[]> {
    return this.http
      .get<RootObject>(`${this.baseUrl}/v2/slot/providers/${providerId}`)
      .pipe(
        map((resp: RootObject) => {
          return resp.data.games;
        })
      );
  }
}

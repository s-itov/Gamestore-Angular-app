import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGameBuyerDataReturnData, IGameData, IGameReturnData } from '../models/gameInterfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  serverUrl = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http.get<IGameReturnData[]>(this.serverUrl.games);
  }

  getGameById(id: string | null) {
    return this.http.get<IGameReturnData>(`${this.serverUrl.games}/${id}`);
  }

  createGame(
    gameData: IGameData,
    accessToken: string | string[]
  ): Observable<IGameReturnData> {
    return this.http.post<IGameReturnData>(this.serverUrl.games, gameData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
      }),
    });
  }

  deleteGame(gameId: string, accessToken: string | string[]) {
    return this.http.delete(`${this.serverUrl.games}/${gameId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
      }),
    });
  }

  updateGame(
    idOffer: string,
    offerData: IGameData,
    accessToken: string | string[]
  ): Observable<IGameReturnData> {
    return this.http.put<IGameReturnData>(
      `${this.serverUrl.games}/${idOffer}`,
      offerData,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Authorization': accessToken,
        }),
      }
    );
  }

  createGameBuyer(gameData: IGameBuyerDataReturnData, accessToken: string) {
    return this.http.post(this.serverUrl.gameBuyers, gameData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
      }),
    });
  }

  getGamesByBuyerId(id: string): Observable<IGameBuyerDataReturnData[]> {
    const encodedUriId = encodeURIComponent(`="${id}"`);
    return this.http.get<IGameBuyerDataReturnData[]>(
      `${this.serverUrl.gamesBuyersGet}${encodedUriId}`
    );
  }
}

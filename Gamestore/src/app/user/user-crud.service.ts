import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGameData, IGameReturnData } from '../interfaces/gameInterfaces';
import { serverUrl } from '../constants/serverConstants';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class UserCrudService {

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get<IGameReturnData[]>(serverUrl.games);
  }

  getOfferById(id: string | null) {
    return this.http.get<IGameReturnData>(`${serverUrl.games}/${id}`);
  }

  createOffer( gameData: IGameData, accessToken: string | string[]): Observable<IGameReturnData> {
    return this.http.post<IGameReturnData>(serverUrl.games, gameData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
      }),
    });
  }

}

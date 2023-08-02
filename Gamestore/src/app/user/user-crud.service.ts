import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGameData, IGameReturnData } from '../interfaces/gameInterfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class UserCrudService {

  
  serverUrl = environment.serverUrl;

  
  
  
  constructor(private http: HttpClient) { }
  
  getAllGames() {
    console.log('Using environment:', environment.production ? 'production' : 'development');
    return this.http.get<IGameReturnData[]>(this.serverUrl.games);
  }

  getOfferById(id: string | null) {
    return this.http.get<IGameReturnData>(`${this.serverUrl.games}/${id}`);
  }

  createGame( gameData: IGameData, accessToken: string | string[]): Observable<IGameReturnData> {
    return this.http.post<IGameReturnData>(this.serverUrl.games, gameData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': accessToken,
      }),
    });
  }

}

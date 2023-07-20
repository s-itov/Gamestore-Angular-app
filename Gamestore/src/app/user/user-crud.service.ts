import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGameReturnData } from '../interfaces/gameInterfaces';
import { serverUrl } from '../constants/serverConstants';


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

}

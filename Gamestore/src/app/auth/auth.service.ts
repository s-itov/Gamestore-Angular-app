import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ILoginData, IRegisterData } from '../models/authInterfaces';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  serverUrl = environment.serverUrl

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  getUserData(): string | null {
    return localStorage.getItem('userData');
  }

  getUsername(): string | null {
    return JSON.parse(localStorage.getItem('userData') || '{}').username;
  }

  getUserAccessToken(): string | string[] {
    return JSON.parse(localStorage.getItem('userData') || '{}').accessToken;
  }

  setUserData(userData: ILoginData | IRegisterData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  setIsLoggedIn(state: boolean): void {
    this.isLoggedIn = state;
  }

  clearUserData() {
    localStorage.removeItem('userData');
  }

  login(userData: ILoginData): Observable<ILoginData> {
    return this.http.post<ILoginData>(this.serverUrl.login, userData);
  }

  register(userData: IRegisterData): Observable<IRegisterData> {
    return this.http.post<IRegisterData>(this.serverUrl.register, userData);
  }

  logout(accessToken: string): void {
    this.clearUserData();
    const headers = new HttpHeaders().set('X-Authorization', accessToken);
    this.http.get<any>(this.serverUrl.logout, { headers });
  }
}

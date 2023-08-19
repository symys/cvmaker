import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInUserId: number | null = null;

  constructor() {}

  login(userId: number) {
    this.loggedInUserId = userId;
  }

  logout() {
    this.loggedInUserId = null;
  }

  getLoggedInUserId(): number | null {
    return this.loggedInUserId;
  }
}

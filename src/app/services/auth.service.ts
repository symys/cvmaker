import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInUserId: number | null = null;

  constructor() {}

  login(userId: number) {
    this.loggedInUserId = userId;
    localStorage.setItem('user', JSON.stringify(userId));
  }

  logout() {
    this.loggedInUserId = null;
    localStorage.removeItem('user');
  }

  getLoggedInUserId(): number | null {
    const id=  localStorage.getItem('user' || "")
    const loggedId = id ? JSON.parse(id) : null
    return loggedId
    // return this.loggedInUserId;
    
  }
}

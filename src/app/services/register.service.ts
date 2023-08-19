import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(this.url, {
      email: email,
      password: password
    })
  }
}

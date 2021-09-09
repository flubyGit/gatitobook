import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  private readonly url = 'http://localhost:3000/user'

  constructor(private _httpClient: HttpClient) { }

  addNewUser(newUser: NewUser) {
    return this._httpClient.post(`${this.url}/signup`, Object.freeze(newUser))
  }

  verifyUserInDatabase(name: string) {
    return this._httpClient.get(`${this.url}/exists/${name}`)
  }
}

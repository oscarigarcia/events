import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser | undefined;
  constructor() {}

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      firstName: 'Oscary',
      lastName: 'García',
      userName,
    };
  }
}

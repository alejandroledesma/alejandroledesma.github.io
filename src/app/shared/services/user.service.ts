import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { User } from '../models';

@Injectable()
export class UserService {
  constructor (
    private apiService: ApiService
  ) {}

  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  getUser(): Observable<[string]> {
    return this.apiService.get('/users/' + environment.username)
           .map(data => {
             this.setUser(data);
             return data;
           });
  }

  setUser(user: User) {
    this.currentUserSubject.next(user);
  }
}
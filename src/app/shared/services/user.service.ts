import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class UserService {
  constructor (
    private apiService: ApiService
  ) {}

  currentUser(): Observable<[string]> {
    return this.apiService.get('/users/' + environment.username)
           .map(data => data);
  }
}
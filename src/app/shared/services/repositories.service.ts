import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Repository } from '../models';

@Injectable()
export class RepositoriesService {
  constructor (
    private apiService: ApiService
  ) {}

  private repositoriesSubject = new BehaviorSubject<Repository>(new Repository());
  public repositories = this.repositoriesSubject.asObservable().distinctUntilChanged();

  getAll(): Observable<[string]> {
    return this.apiService.get('/users/' + environment.username + '/repos')
           .map(data => {
           	this.setRepositories(data);
           	return data
           });
  }

  setRepositories(repositories: Repository) {
    this.repositoriesSubject.next(repositories);
  }
}
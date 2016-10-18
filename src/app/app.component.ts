import { Component, OnInit } from '@angular/core';

import {
  Repository,
  RepositoriesService,
  User,
  UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	constructor(
    private repositoriesService: RepositoriesService,
    private userService: UserService
  ) {}

  repositories: Array<string> = [];
	currentUser: Object = User;

	ngOnInit() {
    this.repositoriesService.getAll().subscribe(repositories => {
      this.repositories = repositories;
    });

		this.userService.getUser().subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
	}
}

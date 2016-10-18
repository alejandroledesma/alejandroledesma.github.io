import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  RepositoriesService,
  User,
  UserService } from '../shared';

@Component({
  selector: 'repos-page',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  constructor(
  	private router: Router,
    private repositoriesService: RepositoriesService,
    private userService: UserService
  ) {}

  repositoriesLoaded: boolean = false;
  repositories: Array<string> = [];
  currentUser: Object = User;

  ngOnInit() {
    this.repositoriesService.getAll().subscribe(repositories => {
      this.repositories = repositories;
      this.repositoriesLoaded = true;
    });

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
  }
}

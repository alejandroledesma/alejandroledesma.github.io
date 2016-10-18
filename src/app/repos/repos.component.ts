import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  Repository,
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

  repositories;
  repositoriesLoaded: boolean = false;
  currentUser: Object = User;

  ngOnInit() {
    this.repositoriesService.repositories.subscribe(
      (repositoriesRes: Repository) => {
        this.repositories = repositoriesRes;
        this.repositoriesLoaded = true;
      }
    );

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  User,
  UserService } from '../shared';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
  	private router: Router,
    private userService: UserService
  ) {}

  currentUser: Object = User;

  ngOnInit() {
    this.userService.currentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  currentUser: Object = User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
  }
}

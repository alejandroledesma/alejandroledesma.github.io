import { Component, OnInit } from '@angular/core';

import { User, UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	constructor(
    private userService: UserService
  ) {}

	currentUser: Object = User;

	ngOnInit() {
		this.userService.getUser().subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
	}
}

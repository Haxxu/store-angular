import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

export interface User {
	firstName: string;
	lastName: string;
}

@Component({
	selector: 'app-home',
	template: `
		<app-newsletter></app-newsletter>
		<button (click)="changeUserName()">Change User Name</button>
	`,
	styles: [],
})
export class HomeComponent {
	user: User | null = {
		firstName: 'Alice',
		lastName: 'Smith',
	};

	constructor(public userService: UserService) {}

	subscribe(email: string) {
		// this.newsletterService.subscribe(email);
	}

	changeUserName() {
		this.userService.loadUser({ firstName: 'Bob', lastName: 'Smith' });
	}
}

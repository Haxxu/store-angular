import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<app-header></app-header>
		<router-outlet></router-outlet>
		<p-toast></p-toast>
	`,
	styles: [],
})
export class AppComponent {
	title = 'store';
}

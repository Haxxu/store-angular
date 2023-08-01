import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { User } from '../home/home.component';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-newsletter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<fieldset
			class="newsletter"
			*ngIf="userService.user$ | async as user; else loading"
		>
			<legend>Newsletter</legend>

			<h5>
				Hello {{ user.firstName }}, enter your email below to subscribe:
			</h5>

			<form>
				<input
					#email
					type="email"
					name="email"
					placeholder="Enter your Email"
				/>
				<input
					type="button"
					class="button button-primary"
					value="Subscribe"
					(click)="subscribeToNewsletter(email.value)"
				/>
			</form>
		</fieldset>

		<ng-template #loading>
			<div>Loading ...</div>
		</ng-template>
	`,
	styles: [],
})
export class NewsletterComponent implements OnInit {
	firstName: string = '';

	constructor(public userService: UserService) {}

	ngOnInit() {
		this.userService.user$.subscribe(
			(user) => (this.firstName = user.firstName)
		);
	}

	subscribeToNewsletter(email: string) {
		// this.newsletterService.subscribe(email);
	}
}

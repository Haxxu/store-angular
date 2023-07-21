import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	isOpenMenu: Boolean = false;

	ngOnInit(): void {}

	toogleMenu(): void {
		this.isOpenMenu = !this.isOpenMenu;
	}

	@HostListener('document:click', ['$event'])
	onDocumentClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const menuButton = document.querySelector(
			'.menu-button'
		) as HTMLElement;
		const menuContent = document.querySelector(
			'.custom-menu'
		) as HTMLElement;

		if (!menuButton.contains(target) && !menuContent.contains(target)) {
			this.isOpenMenu = false;
		}
	}
}

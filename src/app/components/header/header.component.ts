import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cart } from 'src/app/models/cart.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	isOpenMenu: boolean = false;
	private _cart: Cart = { items: [] };
	itemsQuantity: number = 0;

	@Input()
	get cart(): Cart {
		return this._cart;
	}
	set cart(cart: Cart) {
		this._cart = cart;

		this.itemsQuantity = this._cart.items.reduce(
			(curr, item) => item.quantity + curr,
			0
		);
	}

	toggleMenu(): void {
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

		// Check if menuButton and menuContent are not null before using contains method
		if (menuButton && menuContent) {
			if (!menuButton.contains(target) && !menuContent.contains(target)) {
				this.isOpenMenu = false;
			}
		}
	}
}

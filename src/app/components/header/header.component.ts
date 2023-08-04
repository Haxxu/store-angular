import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	isOpenMenu: boolean = false;
	private _cart: Cart = { items: [] };
	itemsQuantity: number = 0;

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

	constructor(private cartService: CartService) {}

	toggleMenu(): void {
		this.isOpenMenu = !this.isOpenMenu;
	}

	getTotal(items: Array<CartItem>): number {
		return this.cartService.getTotal(items);
	}

	onClearCart() {
		this.cartService.clearCart();
	}
}

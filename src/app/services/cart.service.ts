import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart = new BehaviorSubject<Cart>({ items: [] });

	constructor(
		private _snackBar: MatSnackBar,
		private messageService: MessageService
	) {}

	addToCart(item: CartItem): void {
		const items = [...this.cart.value.items];

		const itemInCart = items.find((_item) => _item.id === item.id);
		if (itemInCart) {
			itemInCart.quantity += item.quantity;
		} else {
			items.push(item);
		}

		this.cart.next({ items });
		this._snackBar.open('1 item added to cart.', 'OK', { duration: 3000 });
	}

	getTotal(items: Array<CartItem>): number {
		return items.reduce(
			(curr, item) => item.price * item.quantity + curr,
			0
		);
	}

	clearCart(): void {
		this.cart.next({ items: [] });
		this.messageService.add({
			life: 3000,
			severity: 'success',
			summary: 'OK',
			detail: 'Cart is cleared',
		});
	}
}

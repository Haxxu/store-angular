import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
	cart: Cart = {
		items: [
			{
				product: 'https://via.placeholder.com/150',
				name: 'Snicker',
				price: 1000,
				quantity: 10,
				id: 1,
			},
			{
				product: 'https://via.placeholder.com/150',
				name: 'Balo',
				price: 400,
				quantity: 2,
				id: 2,
			},
		],
	};
	dataSource: CartItem[] = [];
	displayedColumns: string[] = [
		'product',
		'name',
		'price',
		'quantity',
		'total',
		'action',
	];

	ngOnInit(): void {
		this.dataSource = this.cart.items;
	}

	getTotal(): number {
		return this.cart.items.reduce(
			(curr, item) => item.price * item.quantity + curr,
			0
		);
	}
}

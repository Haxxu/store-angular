import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-box',
	templateUrl: './product-box.component.html',
})
export class ProductBoxComponent implements OnInit {
	@Input() fullWidthMode = false;
	@Output() addToCart = new EventEmitter();

	product: Product | undefined = {
		id: 1,
		title: 'Snickers',
		price: 125,
		category: 'shoes',
		description: 'Description hello world',
		image: 'https://via.placeholder.com/150',
	};

	constructor() {}

	ngOnInit(): void {}

	handleAddToCart(): void {
		this.addToCart.emit(this.product);
	}
}

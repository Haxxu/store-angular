import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = {
	1: 400,
	3: 334,
	4: 350,
};

const COLS_TRANFORM: { [id: number]: number } = {
	1: 12,
	3: 4,
	4: 3,
};

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	sidebarVisible: boolean = false;
	cols: number = 3;
	colsGridSystem = COLS_TRANFORM[this.cols];
	rowHeight = ROWS_HEIGHT[this.cols];
	category: string | undefined;

	constructor(private cartService: CartService) {}

	onColumnCountChange(colsNum: number) {
		this.cols = colsNum;
		this.rowHeight = ROWS_HEIGHT[this.cols];
		this.colsGridSystem = COLS_TRANFORM[this.cols];
	}

	onShowCategory(newCategory: string): void {
		this.category = newCategory;
	}

	onAddToCart(product: Product): void {
		this.cartService.addToCart({
			product: product.image,
			name: product.title,
			price: product.price,
			quantity: 1,
			id: product.id,
		});
	}
}

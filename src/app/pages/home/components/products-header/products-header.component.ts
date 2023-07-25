import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-products-header',
	templateUrl: './products-header.component.html',
	styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent implements OnInit {
	@Output() columnsCountChange = new EventEmitter<number>();
	sortItems: MenuItem[] = [];
	sortType: 'asc' | 'desc' = 'desc';
	itemsShowCount = 12;
	showItems: MenuItem[] = [];

	ngOnInit(): void {
		this.sortItems = [
			{
				label: 'Sort by',
				items: [
					{
						label: 'Acsending',
						icon: 'pi pi-sort-amount-down-alt',
						command: () => {
							this.onSortUpdated('asc');
						},
					},
					{
						label: 'Decsending',
						icon: 'pi pi--amount-down',
						command: () => {
							this.onSortUpdated('desc');
						},
					},
				],
			},
		];

		this.showItems = [
			{
				label: '12',
				command: () => {
					this.onShowItemsUpdated(12);
				},
			},
			{
				label: '24',
				command: () => {
					this.onShowItemsUpdated(24);
				},
			},
			{
				label: '36',
				command: () => {
					this.onShowItemsUpdated(36);
				},
			},
		];
	}

	onSortUpdated(type: 'desc' | 'asc'): void {
		this.sortType = type;
	}

	onShowItemsUpdated(number: number): void {
		this.itemsShowCount = number;
	}

	onColumnsUpdated(colsNum: number): void {
		this.columnsCountChange.emit(colsNum);
	}
}

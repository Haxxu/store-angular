import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	sidebarVisible: boolean = false;
	cols: number = 3;
	category: string | undefined;

	onColumnCountChange(colsNum: number) {
		this.cols = colsNum;
	}

	onShowCategory(newCategory: string): void {
		this.category = newCategory;
	}
}

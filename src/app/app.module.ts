import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';
import { MatIconModule } from '@angular/material/icon';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent as TestHomeComponent } from './test/components/home/home.component';
import { NewsletterComponent } from './test/components/newsletter/newsletter.component';
import { CartService } from './services/cart.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		ProductsHeaderComponent,
		FiltersComponent,
		ProductBoxComponent,
		CartComponent,

		NewsletterComponent,
		TestHomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SidebarModule,
		DataViewModule,
		MenuModule,
		ButtonModule,
		CardModule,
		AccordionModule,
		ToolbarModule,
		TableModule,
		BadgeModule,
		MessagesModule,
		MatIconModule,
		MatSnackBarModule,
		ToastModule,
	],
	providers: [CartService, MessageService],
	bootstrap: [AppComponent],
})
export class AppModule {}

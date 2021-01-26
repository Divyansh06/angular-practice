import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ProductDashboardComponent } from './container/product-dashboard/product-dashboard.component';
import { ProductComponent } from './container/product-dashboard/product/product.component';
import { ProductFormComponent } from './container/product-form/product-form.component';
import { AlertsComponent } from './container/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductDashboardComponent,
    ProductComponent,
    ProductFormComponent,
    AlertsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

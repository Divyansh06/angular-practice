import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css', '../../app.component.css'],
})
export class ProductDashboardComponent implements OnInit {
  @Input() productlist: {
    name: String;
    description: String;
    image: String;
  }[] = [];

  @Output() delete = new EventEmitter<{ index: Number }>();

  ngOnInit(): void {}

  onDelete(eventData) {
    this.delete.emit({ index: eventData });
  }
}

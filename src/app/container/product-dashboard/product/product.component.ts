import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', '../../../app.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: { name: String; description: String; image: String };
  @Output() delete = new EventEmitter();
  ngOnInit(): void {}

  onDelete() {
    this.delete.emit();
  }
}

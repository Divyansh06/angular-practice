import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  name: String = '';
  description: String = '';
  image: String = '';

  @Output() onProductCreate = new EventEmitter<{
    name: String;
    description: String;
    image: String;
  }>();

  ngOnInit(): void {}

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleDesChange(event) {
    this.description = event.target.value;
  }

  handleImageChange(event) {
    this.image = event.target.value;
  }

  handleSubmit() {
    const { name, description, image } = this;
    this.onProductCreate.emit({
      name,
      description,
      image,
    });
    this.name = '';
    this.description = '';
    this.image = '';
  }
}

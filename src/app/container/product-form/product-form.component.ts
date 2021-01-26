import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  name: String = '';
  description: String = '';
  image: String = '';

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
    console.log(this.name, this.description, this.image);
    this.name = '';
    this.description = '';
    this.image = '';
  }
}

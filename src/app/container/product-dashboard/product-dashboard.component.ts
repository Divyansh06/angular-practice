import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css', '../../app.component.css'],
})
export class ProductDashboardComponent implements OnInit {
  productlist: { name: String; description: String; image: String }[] = [
    {
      name: 'Headphones',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
    },
    {
      name: 'Watch',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
    },
    {
      name: 'Sun Glasses',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
    },
    {
      name: 'Shoes',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image:
        'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
    },
    {
      name: 'Car',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image:
        'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
    },
    {
      name: 'Camera',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card content.',
      image:
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200',
    },
  ];

  ngOnInit(): void {}
}

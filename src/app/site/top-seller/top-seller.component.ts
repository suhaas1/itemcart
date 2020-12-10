import { ProductsService } from './../../common/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'site-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.less']
})
export class TopSellerComponent {

  allProducts: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void { 
    this.productsService.getProducts().subscribe((data) => {
      this.allProducts = data;
    })
  }

}

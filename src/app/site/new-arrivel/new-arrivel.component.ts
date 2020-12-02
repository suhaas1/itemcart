import { ProductsService } from './../../common/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'site-new-arrivel',
  templateUrl: './new-arrivel.component.html',
  styleUrls: ['./new-arrivel.component.less']
})
export class NewArrivelComponent {
  allProducts: any;

  constructor(productsService: ProductsService) {
    this.allProducts = productsService.getProducts();
  }

}
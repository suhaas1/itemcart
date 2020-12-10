import { ProductsService } from './../../common/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-new-arrivel',
  templateUrl: './new-arrivel.component.html',
  styleUrls: ['./new-arrivel.component.less']
})
export class NewArrivelComponent implements OnInit {
  allProducts: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void { 
    this.productsService.getProducts().subscribe((data) => {
      this.allProducts = data;
    })
  }

}
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getProducts() {
    return this.db.list('prooducts').valueChanges()
    // return [
    //   {
    //     id: 1,
    //     name: 'Multi Chair',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita obcaecati eum tenetur omnis, commodi officia. Est similique ratione aut alias fugit dolorem voluptatum et? Officia a officiis laudantium minus!',
    //     price: 250,
    //     image: 'assets/imgs/photos1.png',
    //     favorite: true
    //   },
    //   {
    //     id: 1,
    //     name: 'Book Shelf',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita obcaecati eum tenetur omnis, commodi officia. Est similique ratione aut alias fugit dolorem voluptatum et? Officia a officiis laudantium minus!',
    //     price: 250,
    //     image: 'assets/imgs/product2.jpg',
    //     favorite: true
    //   },
    //   {
    //     id: 1,
    //     name: 'Material Shelf',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita obcaecati eum tenetur omnis, commodi officia. Est similique ratione aut alias fugit dolorem voluptatum et? Officia a officiis laudantium minus!',
    //     price: 250,
    //     image: 'assets/imgs/product3.jpg',
    //     favorite: false
    //   },
    //   {
    //     id: 1,
    //     name: 'Mini Shelf',
    //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui expedita obcaecati eum tenetur omnis, commodi officia. Est similique ratione aut alias fugit dolorem voluptatum et? Officia a officiis laudantium minus!',
    //     price: 250,
    //     image: 'assets/imgs/product5.jpg',
    //     favorite: true
    //   }
    // ]
  }
}

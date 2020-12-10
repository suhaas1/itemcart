import { CategoriesService } from './../../common/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  categories$: any;

  constructor(private categoriesService:CategoriesService) {}

  ngOnInit(): void { 
    //categories data
    this.categories$ = this.categoriesService.getCategories();
  }

  //categories and products change
  viewMode = "viewCategories";

  addCategories(categoriesInput) {
    categoriesInput.value = '';
  }

}

import { CategoriesService } from './../../common/services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  categories = [];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void { 
    //categories data
    this.categoriesService.getCategories().subscribe(categories => { 
      this.categories = categories;
    });
  }

  //sidemenu start
  sideMenuCheck:boolean;
  bodyElement = document.querySelector('body');
  moreOption() {
    this.sideMenuCheck = true;
    this.bodyElement.classList.add('hideScroll');
  }
  sideMenuClose() {
    this.sideMenuCheck = false;
    this.bodyElement.classList.remove('hideScroll');
  }

  //login register toggle
  logRegNav: boolean;
  loginRegisterClick() {
    this.logRegNav = !this.logRegNav;
    this.bodyElement.classList.add('hideScroll');
  }
  logRegChange(e) {
    if (e == false) {
      this.loginRegisterClick();
    }
  }

}

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
//Service
import { CategoriesService } from './common/services/categories.service';
//Component
import { NavbarComponent } from './site/navbar/navbar.component';
import { ProductsComponent } from './site/products/products.component';
import { FooterComponent } from './site/footer/footer.component';
import { TopSellerComponent } from './site/top-seller/top-seller.component';
import { NewArrivelComponent } from './site/new-arrivel/new-arrivel.component';
import { LoginRegisterComponent } from './site/login-register/login-register.component';
import { FavoriteComponent } from './site/favorite.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CustomePipe } from './common/pipe/custome.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    TopSellerComponent,
    NewArrivelComponent,
    LoginRegisterComponent,
    FavoriteComponent,
    CustomePipe,
    AdminLoginComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },
      {
        path: '**',
        component: NotFoundPageComponent
      },
    ])
  ],
  providers: [
    CategoriesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

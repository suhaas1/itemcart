import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
//Service
import { CategoriesService } from './common/services/categories.service';
import { ProductsService } from './common/services/products.service';
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
import { IndexComponent } from './site/index/index.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

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
    NotFoundPageComponent,
    IndexComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent},
      { path: 'admin', component: AdminLoginComponent },
      { path: 'admin/dashboard', component: DashboardComponent},
      { path: '**', component: NotFoundPageComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    CategoriesService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

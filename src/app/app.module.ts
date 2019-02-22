import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Services
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalComponent } from './components/m/modal/teste.component';
import { ProdutoCadastrarComponent } from './components/produto/cadastrar/produto-cadastrar.component';

import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ProdutoDataApiService } from 'src/app/services/produto-data-api.service';
// Externals
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProdutoListaComponent } from './components/admin/lista-produtos/produtolista.component';
import { EditarComponent } from './components/produto/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    HeroComponent,
    DetailsBookComponent,
    ListBooksComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent,
    TruncateTextPipe,
    ProdutoListaComponent,
    EditarComponent,
    ProdutoCadastrarComponent
  ],

  imports: [BrowserModule,
     AppRoutingModule, 
     HttpClientModule, 
     FormsModule, 
     NgxSpinnerModule, 
     NgxPaginationModule],

  providers: [DataApiService, ProdutoDataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

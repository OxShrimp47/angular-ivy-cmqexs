import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {DataFetchComponent} from './data-fetch/data-fetch.component';



@NgModule({
  declarations:[
    AppComponent,
    DataFetchComponent
  ],
  imports:      [ 
    BrowserModule,
    FormsModule, 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NopageFoundComponent } from './nopage_found/nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NewcarComponent } from './pages/car/newcar/newcar.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';








@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
    NewcarComponent,
    
    
    
    
    
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AutocompleteLibModule,// autocomplete
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './github/user-list/user-list.component';
import { UserDetailsComponent } from './github/user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ GithubService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
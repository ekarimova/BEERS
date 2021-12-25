import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersMainComponent } from './beers-main/beers-main.component';
import { BeersListComponent } from './beers-main/beers-list/beers-list.component';
import { BeerDetailsComponent } from './beers-main/beer-details/beer-details.component';
import { ErrorComponent } from './error/error.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from './backend.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BeersMainComponent,
    BeersListComponent,
    BeerDetailsComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

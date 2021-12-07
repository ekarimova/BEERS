import {Routes} from '@angular/router';
import {BeersMainComponent} from './beers-main/beers-main.component';
import {BeerDetailsComponent} from './beers-main/beer-details/beer-details.component';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  // todo: routing should also show paging params?
  {
    path: 'beers',
    component: BeersMainComponent
  },
  {
    path: 'beers/beer/:id',
    component: BeerDetailsComponent
  },
  {path: '', redirectTo: 'beers', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

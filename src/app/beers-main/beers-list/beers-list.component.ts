import {Component, OnDestroy, OnInit} from '@angular/core';
import {BackendService} from '../../backend.service';
import {Beer} from '../../interfaces/beer.interface';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit, OnDestroy {
  resp$: Observable<Beer []>;
  subscr$: Subscription;
  beers: Beer[] = [];
  constructor(private backendService: BackendService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resp$ = this.backendService.getBeersByPage(1, 10);
    this.subscr$ = this.resp$.subscribe((resp: Beer []) => {
      this.beers = resp;
      console.log('BEERS', this.beers);
    });
  }


  navigateToBeerDetails(id: number) {
    this.router.navigate([this.activatedRoute.routeConfig.path + '/beer', id]);
  }

  ngOnDestroy() {
    this.subscr$.unsubscribe();
  }

}

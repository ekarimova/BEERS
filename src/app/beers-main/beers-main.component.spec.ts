import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersMainComponent } from './beers-main.component';

describe('BeersMainComponent', () => {
  let component: BeersMainComponent;
  let fixture: ComponentFixture<BeersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

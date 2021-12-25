import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BeersMainComponent } from './beers-main.component';

describe('BeersMainComponent', () => {
  let component: BeersMainComponent;
  let fixture: ComponentFixture<BeersMainComponent>;

  beforeEach(waitForAsync(() => {
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

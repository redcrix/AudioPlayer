import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyviewedPage } from './recentlyviewed.page';

describe('RecentlyviewedPage', () => {
  let component: RecentlyviewedPage;
  let fixture: ComponentFixture<RecentlyviewedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyviewedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyviewedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

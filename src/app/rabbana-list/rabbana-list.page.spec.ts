import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbanaListPage } from './rabbana-list.page';

describe('RabbanaListPage', () => {
  let component: RabbanaListPage;
  let fixture: ComponentFixture<RabbanaListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbanaListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbanaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

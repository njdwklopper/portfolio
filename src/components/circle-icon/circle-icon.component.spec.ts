import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleIconPage } from './circle-icon.page';

describe('CircleIconPage', () => {
  let component: CircleIconPage;
  let fixture: ComponentFixture<CircleIconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleIconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

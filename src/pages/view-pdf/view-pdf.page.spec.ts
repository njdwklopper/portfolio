import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPdfPage } from './view-pdf.page';

describe('ViewPdfPage', () => {
  let component: ViewPdfPage;
  let fixture: ComponentFixture<ViewPdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPdfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

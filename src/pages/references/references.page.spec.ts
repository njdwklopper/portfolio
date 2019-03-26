import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesPage } from './references.page';

describe('ReferencesPage', () => {
  let component: ReferencesPage;
  let fixture: ComponentFixture<ReferencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

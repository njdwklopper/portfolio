import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GithubItemComponent} from './github-item.component';

describe('GithubItemPage', () => {
    let component: GithubItemComponent;
    let fixture: ComponentFixture<GithubItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GithubItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GithubItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

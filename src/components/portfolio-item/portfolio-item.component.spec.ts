import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PortfolioItemComponent} from './portfolio-item.component';


describe('PortfolioItemPage', () => {
    let component: PortfolioItemComponent;
    let fixture: ComponentFixture<PortfolioItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PortfolioItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

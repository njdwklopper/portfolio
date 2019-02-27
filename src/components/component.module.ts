import {NgModule} from '@angular/core';
import {PortfolioItemComponent} from './portfolio-item/portfolio-item.component';
import {CircleIconComponent} from './circle-icon/circle-icon.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        PortfolioItemComponent,
        CircleIconComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        PortfolioItemComponent,
        CircleIconComponent
    ]
})
export class ComponentModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PortfolioPage} from './portfolio.page';
import {PortfolioItemComponent} from '../../components/portfolio-item/portfolio-item.component';

const routes: Routes = [
    {
        path: '',
        component: PortfolioPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PortfolioPage,
        PortfolioItemComponent
    ]
})
export class PortfolioPageModule {
}

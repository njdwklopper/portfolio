import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {GithubPage} from './github.page';
import {ComponentModule} from '../../components/component.module';

const routes: Routes = [
    {
        path: '',
        component: GithubPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        GithubPage
    ]
})
export class GithubPageModule {
}

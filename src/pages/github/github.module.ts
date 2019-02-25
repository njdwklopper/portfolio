import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {GithubPage} from './github.page';
import {GithubItemComponent} from '../../components/github-item/github-item.component';

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
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        GithubPage,
        GithubItemComponent
    ]
})
export class GithubPageModule {
}

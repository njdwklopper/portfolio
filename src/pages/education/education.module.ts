import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EducationPage} from './education.page';
import {ComponentModule} from '../../components/component.module';

const routes: Routes = [
    {
        path: '',
        component: EducationPage
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
    declarations: [EducationPage]
})
export class EducationPageModule {
}

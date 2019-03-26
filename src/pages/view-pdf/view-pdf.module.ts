import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ViewPdfPage} from './view-pdf.page';
import {PdfViewerModule} from 'ng2-pdf-viewer';

const routes: Routes = [
    {
        path: '',
        component: ViewPdfPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PdfViewerModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ViewPdfPage]
})
export class ViewPdfPageModule {
}

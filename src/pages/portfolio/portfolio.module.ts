import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PortfolioPage} from './portfolio';
import {ProjectsProvider} from "../../providers/projects/projects";

@NgModule({
  declarations: [
    PortfolioPage,
  ],
  imports: [
    IonicPageModule.forChild(PortfolioPage)
  ],
  providers: [
    ProjectsProvider
  ]
})
export class PortfolioPageModule {
}

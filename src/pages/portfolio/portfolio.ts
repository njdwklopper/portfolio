import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ProjectsProvider} from "../../providers/projects/projects";

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  projects = [];

  constructor(public navCtrl: NavController, private projectService: ProjectsProvider) {
  }

  ionViewDidLoad() {
    this.projectService.getPortfolioInfo().subscribe(projects => {
      console.log(JSON.stringify(projects));
      this.projects = projects.projects;
    }, error => {
      console.log("Error: " + JSON.stringify(error));
    });
  }

  getImage(image) {
    return this.projectService.getImageURL() + image;
  }
}

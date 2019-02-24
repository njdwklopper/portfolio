import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.page.html',
    styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

    projects = [];

    constructor(private projectService: PortfolioService) {
    }

    ngOnInit() {
        this.projectService.getPortfolioInfo().subscribe(projects => {
            console.log(JSON.stringify(projects));
            this.projects = projects.projects;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }

    getImage(image) {
        return this.projectService.getImageURL() + image;
    }
}

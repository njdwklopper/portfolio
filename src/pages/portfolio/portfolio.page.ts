import {Component, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.page.html',
    styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

    projects = [];

    constructor(private projectService: KlopperService) {
    }

    ngOnInit() {
        this.projectService.getPortfolioInfo().subscribe(projects => {
            console.log(JSON.stringify(projects));
            this.projects = projects.projects;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }
}

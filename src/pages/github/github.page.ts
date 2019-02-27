import {Component, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-github',
    templateUrl: './github.page.html',
    styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {

    projects = [];

    constructor(private projectService: KlopperService) {
    }

    ngOnInit() {
        this.projectService.getGithub().subscribe(projects => {
            console.log(JSON.stringify(projects));
            this.projects = projects.projects;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }
}

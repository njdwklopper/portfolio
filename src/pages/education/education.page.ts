import {Component, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.page.html',
    styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

    qualifications = [];

    constructor(private projectService: KlopperService) {
    }

    ngOnInit() {
        this.projectService.getEducation().subscribe(list => {
            console.log(JSON.stringify(list));
            this.qualifications = list.qualifications;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }

}

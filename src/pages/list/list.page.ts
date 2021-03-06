import {Component, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    public items: Array<{ skill: string; time: string; icon: string }> = [];

    constructor(private projectService: KlopperService) {
    }

    ngOnInit() {
        this.projectService.getSkills().subscribe(list => {
            console.log(JSON.stringify(list));
            this.items = list.skills;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }
}

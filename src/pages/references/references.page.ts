import {Component, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-references',
    templateUrl: './references.page.html',
    styleUrls: ['./references.page.scss'],
})
export class ReferencesPage implements OnInit {

    public items: Array<{ skill: string; time: string; icon: string }> = [];

    constructor(private projectService: KlopperService) {
    }

    ngOnInit() {
        this.projectService.getReferences().subscribe(list => {
            console.log(JSON.stringify(list));
            this.items = list.skills;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }
}

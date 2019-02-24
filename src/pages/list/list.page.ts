import {Component, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    private names = [];
    public items: Array<{ skill: string; time: string; icon: string }> = [];

    constructor(private projectService: KlopperService) {
    }

    private setupIcons() {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                skill: this.names[i],
                time: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    ngOnInit() {
        this.projectService.getSkills().subscribe(list => {
            console.log(JSON.stringify(list));
            this.items = list.skills;
        }, error => {
            console.log(`Error: ${JSON.stringify(error)}`);
        });
    }

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}

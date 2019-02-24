import {Component, Input, OnInit} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent implements OnInit {

    @Input()
    project: any;

    constructor() {
    }

    ngOnInit() {
    }

    getImageURL(image) {
        return `${KlopperService.PROJECTS_URL}/img/${image}`;
    }
}

import {Component, Input} from '@angular/core';
import {KlopperService} from '../../providers/klopper.service';

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent {

    @Input()
    project: any;

    getImageURL(image) {
        return `${KlopperService.PROJECTS_URL}/img/${image}`;
    }
}

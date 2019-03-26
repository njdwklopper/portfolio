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

    getImageURL(image: string) {
        if (image.indexOf(`http`) >= 0) {
            return image;
        } else {
            return `${KlopperService.PROJECTS_URL}/img/${image}`;
        }
    }

    getImageIcon(image) {
        if (image) {
            return `./assets/icon/${image}`;
        } else {
            return `./assets/icon/none_logo_icon.png`;
        }
    }

    openLink(link) {
        if (link) {
            if (link.indexOf('pdf') >= 0) {
                window.open(link, '_self');
            } else {
                window.open(link);
            }
        }
    }
}

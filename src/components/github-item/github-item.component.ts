import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-github-item',
    templateUrl: './github-item.component.html',
    styleUrls: ['./github-item.component.scss'],
})
export class GithubItemComponent {
    @Input()
    project: any;

    openLink(link) {
        window.open(link);
    }
}

import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-circle-icon',
    templateUrl: './circle-icon.component.html',
    styleUrls: ['./circle-icon.component.scss'],
})
export class CircleIconComponent {
    @Input()
    icon: any = './assets/icon/android_logo_icon.png';
}

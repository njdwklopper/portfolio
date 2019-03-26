import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Portfolio',
            url: '/portfolio',
            icon: 'paper'
        },
        {
            title: 'Skills List',
            url: '/list',
            icon: 'list'
        },
        {
            title: 'Github',
            url: '/github',
            icon: 'git-branch'
        },
        {
            title: 'References',
            url: '/references',
            icon: 'contacts'
        },
        {
            title: 'Contact',
            url: '/contact',
            icon: 'mail'
        }
    ];

    constructor(
        private platform: Platform
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
        });
    }
}

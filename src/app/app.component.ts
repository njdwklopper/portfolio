import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

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
      title: 'Portfolio (WIP)',
      url: '/portfolio',
      icon: 'paper'
    },
    // {
    //   title: 'Experience',
    //   url: '/experience',
    //   icon: 'logo-android'
    // },
    {
      title: 'Skills List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Github',
      url: '/github',
      icon: 'git-branch'
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

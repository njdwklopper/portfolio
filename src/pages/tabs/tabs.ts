import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {PortfolioPage} from "../portfolio/portfolio";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PortfolioPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

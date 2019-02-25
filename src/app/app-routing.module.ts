import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: '../pages/home/home.module#HomePageModule'
    },
    {
        path: 'portfolio',
        loadChildren: '../pages/portfolio/portfolio.module#PortfolioPageModule'
    },
    {
        path: 'list',
        loadChildren: '../pages/list/list.module#ListPageModule'
    },
    {
        path: 'github',
        loadChildren: '../pages/github/github.module#GithubPageModule'
    },
    {
        path: 'contact',
        loadChildren: '../pages/contact/contact.module#ContactPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

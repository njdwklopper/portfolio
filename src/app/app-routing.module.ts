import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const _path = `../pages/`; // This is what you do when you CONSTANTLY forget a '.' character
const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: `${_path}home/home.module#HomePageModule`
    },
    {
        path: 'portfolio',
        loadChildren: `${_path}portfolio/portfolio.module#PortfolioPageModule`
    },
    {
        path: 'list',
        loadChildren: `${_path}list/list.module#ListPageModule`
    },
    {
        path: 'github',
        loadChildren: `${_path}github/github.module#GithubPageModule`
    },
    {
        path: 'contact',
        loadChildren: `${_path}contact/contact.module#ContactPageModule`
    },
    {
        path: 'references',
        loadChildren: `${_path}references/references.module#ReferencesPageModule`
    },
    {
        path: 'view-pdf/:item',
        loadChildren: `${_path}view-pdf/view-pdf.module#ViewPdfPageModule`
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

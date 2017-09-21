import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home-page/home.component';
import {AboutComponent} from './about/about.component';
import {Routes, RouterModule} from '@angular/router';
import {notFound} from './404/404';


const routes: Routes = [
    {path: '', component: HomeComponent},

    {
        path: 'about', component: AboutComponent,
        children: [
            {path: 'c', component: HomeComponent}
        ]
    },
    {path: '**', component: notFound},
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        notFound

    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

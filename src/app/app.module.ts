import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home-page/home.component';
import {AboutComponent} from './about/about.component';
import {Routes, RouterModule} from '@angular/router';
import {notFound} from './404/404';
import {ArshareModule} from './includes/ar-share.module';
import {ContactComponent} from './contact/contact.component';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';



const routes: Routes = [
    {path: '', component: HomeComponent},

    {
        path: 'contact', component: ContactComponent,},
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
        ContactComponent,
        notFound,


    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        ArshareModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

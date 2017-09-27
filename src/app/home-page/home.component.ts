/**
 * Created by bk on 9/21/2017.
 */
import {Component} from '@angular/core';
import {appService} from '../popupService';
// import Typed from 'typed.js';

@Component({
    selector: 'home-app',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [appService]
})
export class HomeComponent {
    value: string = "";
    constructor(private fg: appService) { }

    ngOnInit(): void {
        this.value = this.fg.getApp();
    }






}


/**
 * Created by bk on 9/21/2017.
 */
import {Component} from '@angular/core';
import {PopUpService} from '../popupService';
// import Typed from 'typed.js';

@Component({
    selector: 'home-app',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [PopUpService]
})
export class HomeComponent {
    value: string = "";
    constructor(private fg: PopUpService) { }







}


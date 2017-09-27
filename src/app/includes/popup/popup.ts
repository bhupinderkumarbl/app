/**
 * Created by bk on 9/21/2017.
 */

import {Component} from '@angular/core';
import {PopUpService} from '../../popupService';
@Component({
    selector:'popup',
    templateUrl:'popup.html',
    styleUrls:['popup.css']

})
export class popupComponent{
    constructor(private closeDialoge: PopUpService){
    }
    closeDialog() {
    this.closeDialoge.closePopUp.next(true);
    }

}

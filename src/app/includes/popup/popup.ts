/**
 * Created by bk on 9/21/2017.
 */

import {Component} from '@angular/core';
@Component({
    selector:'popup',
    templateUrl:'popup.html',
    styleUrls:['popup.css']

})

export class popupComponent{

    showForm(){
        alert()
        document.getElementById("popup1").classList.toggle('overlayvisible');
    }
}

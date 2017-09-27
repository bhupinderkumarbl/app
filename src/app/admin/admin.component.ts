/**
 * Created by bk on 9/21/2017.
 */
import {Component} from '@angular/core'

@Component({
    selector: 'home-app',
    templateUrl: 'admin.html',
    styleUrls: ['component.css']
})
export class AdminComponent {
    onSubmit(formData) {

        if(formData.valid) {
            // console.log(formData.value);
            alert("dfdfd")
        }
    }




}


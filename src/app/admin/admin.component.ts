/**
 * Created by bk on 9/21/2017.
 */
import {Component} from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Http, Response, Request, RequestMethod} from '@angular/http'

@Component({
    selector: 'home-app',
    templateUrl: 'admin.html',
    styleUrls: ['component.css']
})
export class AdminComponent {
    complexForm : FormGroup;

    constructor(fb: FormBuilder){
        this.complexForm = fb.group({
            'firstName' : '',
        'lastName': '',
        'gender' : 'Female',
        'hiking' : false,
            'running' : false,
            'swimming' : false
    })
    }

    submitForm(value: any){
        console.log(value);
    }
    onSubmit(formData) {

        if(formData.valid) {
            // console.log(formData.value);
            alert("dfdfd")
        }
    }




}


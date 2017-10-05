/**
 * Created by bk on 9/21/2017.
 */
import {Component} from '@angular/core'
import {Observable,Observer } from "rxjs";
// import { formBuilder,formGroup, Validators } from 'angular/forms';

let number =[1,2,3,4,5];
let source =Observable.from(number);
//
//
// class MyObserver implements Observer<number>{
//
//     next(value){
//         console.log('value: ${value}');
//     }
//
//     error(e){
//         console.log('error: ${e}');
//     }
//
//     complete(){
//         console.log('complete');
//     }
//
// }
//
//
//
// source.subsribe(new MyObserver());
//
//
//





@Component({
    selector: 'home-app',
    templateUrl: './index.html',
    styleUrls: ['component.css']
})
export class ContactComponent {
    languages= ['English', 'Spanish','Other'];

}


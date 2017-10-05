/**
 * Created by bk on 9/22/2017.
 */
import {    Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
@Injectable()
export class PopUpService {
    constructor(private bhupi: Http) {

    }
    closePopUp: BehaviorSubject<boolean> = new BehaviorSubject(false);

    getPosts(): Observable<any> {
        return this.bhupi.get('https://jsonplaceholder.typicode.com/posts/5')
            .map((data) => data.json())
            //.catch((err) => console.log(err))
    }
}
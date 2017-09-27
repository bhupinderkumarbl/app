/**
 * Created by bk on 9/22/2017.
 */
import {    Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class PopUpService {
    closePopUp: BehaviorSubject<boolean> = new BehaviorSubject(false);

}
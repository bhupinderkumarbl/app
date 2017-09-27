/**
 * Created by bk on 9/22/2017.
 */
import {    Injectable} from '@angular/core';
@Injectable()
export class appService {
    getApp(): string {
        return "Hello world";
    }
}
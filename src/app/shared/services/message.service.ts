import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from '../models/message.type';
import { Global } from '../global.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/RX';

@Injectable()

export class MessageService {

    endpoint: string;
    headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(public http: Http) {
        this.endpoint = Global.endpoint + 'api/Message';
    }

        public postMessage(message: Message) {
            return this.http.post(this.endpoint, message, { headers: this.headers })
            .catch(this.handleError)
            .subscribe(response => console.log(response));
        }

    handleError(error: Response) {
        console.error('error: ', error.status);
        return Observable.throw(error.json() || 'Server error');
        }

}

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Color } from '../models/color.type';
import { Global } from '../global.service';
import 'rxjs/add/operator/map'
import 'rxjs/RX';


@Injectable()
export class ColorService {

    endpoint: string;

    // Refactor endpoint/originUrl to a shared service
    constructor(public http: Http) {
        this.endpoint = Global.endpoint + 'api/Color';
    }


    public getColors() {
        return this.http.get(this.endpoint)
            .map(response => response.json() as Color[]);
    }
}


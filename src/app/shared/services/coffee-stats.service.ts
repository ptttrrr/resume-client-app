import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CoffeeStats } from '../models/coffee-stats.type';
import { Global } from '../global.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/RX';

@Injectable()
export class CoffeeStatsService {

    endpoint: string;

    constructor(public http: Http)  {
        this.endpoint = Global.endpoint + 'api/CoffeeStatus';
    }

    public GetCoffeeStats() {
        return this.http.get(this.endpoint)
            .map(response => response.json());
    }

}

// fix error handling

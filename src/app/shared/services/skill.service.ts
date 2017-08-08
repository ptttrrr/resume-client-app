import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Skill } from '../models/skill.type';
import { Global } from '../global.service';
import 'rxjs/add/operator/map';
import 'rxjs/RX';


@Injectable()
export class SkillService {

    endpoint: string;

    constructor(public http: Http) {
        this.endpoint = Global.endpoint + 'api/Skill';
    }


    public getSkills() {
        return this.http.get(this.endpoint)
            .map(response => response.json() as Skill[]);
    }
}


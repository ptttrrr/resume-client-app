import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../shared/services/skill.service';
import { ISkill } from '../../shared/models/skill.interface';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html'
})
export class SkillComponent implements OnInit {

    public skills: ISkill[] = [];


    constructor(private skillService: SkillService) {
        }

    ngOnInit() {
        this.skillService.getSkills()
            .subscribe(skills => {
                this.skills = skills;
            });
    }

}
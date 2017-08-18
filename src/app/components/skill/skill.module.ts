import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';
import { SkillService } from '../../shared/services/skill.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SkillComponent
    ],
    declarations: [
        SkillComponent
    ],
    providers: [SkillService]
})

export class SkillModule {
}

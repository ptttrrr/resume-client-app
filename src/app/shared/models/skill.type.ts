import { ISkill } from './skill.interface';

export class Skill implements ISkill {
    id: number;
    name: string;
    scale: number;
}
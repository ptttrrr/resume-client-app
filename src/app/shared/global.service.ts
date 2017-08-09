import { environment } from '../../environments/environment';


export class Global {
    public static get endpoint(): string { return environment.apiUrl; }
}
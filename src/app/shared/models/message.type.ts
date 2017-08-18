import { IMessage } from './message.interface';

export class Message implements IMessage {

    constructor(public textMessage: string) { }
}

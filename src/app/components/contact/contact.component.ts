import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../shared/services/message.service';
import { Message } from '../../shared/models/message.type';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {

    private newMessage: Message;
    private messageForm: FormGroup;
    private message: any = '';
    private notification: string;

    constructor(private messageService: MessageService,
                private fb: FormBuilder) {


        this.messageForm = fb.group ({
            'message': [null, Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(100)])
            ]});
    }

    postMessage(message: string) {
        if (this.messageForm.valid) {
            this.newMessage = new Message(message);
            this.messageService.postMessage(this.newMessage);

            this.messageForm.controls['message'].reset();
            this.messageForm.controls['message'].disable();
            this.notification = 'Thank you.';
        }

    }

}

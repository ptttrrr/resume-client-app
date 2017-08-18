import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MessageService } from '../../shared/services/message.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule

    ],
    exports: [
        ContactComponent
    ],
    declarations: [
        ContactComponent
    ],
    providers: [MessageService]
})

export class ContactModule {
}

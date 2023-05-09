import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AnimateModule } from 'primeng/animate';
import { KnobModule } from 'primeng/knob';
import { UserManagerComponent } from './user-manager/user-manager.component';

@NgModule({
    declarations: [AppComponent, UserManagerComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        AnimateModule,
        KnobModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

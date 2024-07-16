import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { FsAutocompleteModule } from '@firestitch/autocomplete';
import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule } from '@firestitch/form';

import { FsPromptAutocompleteComponent } from './prompt-autocomplete.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        MatDialogModule,
        MatButtonModule,

        FsAutocompleteModule,
        FsDialogModule,
        FsFormModule,
    ],
    declarations: [
        FsPromptAutocompleteComponent,
    ]
})
export class FsPromptAutocompleteModule { }

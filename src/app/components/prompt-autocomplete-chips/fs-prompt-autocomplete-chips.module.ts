import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FsAutocompleteChipsModule } from '@firestitch/autocomplete-chips';

import { FsDialogModule } from '@firestitch/dialog';

import { FsPromptAutocompleteChipsComponent } from './prompt-autocomplete-chips.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        FsAutocompleteChipsModule,
        FsDialogModule
    ],
    declarations: [
        FsPromptAutocompleteChipsComponent,
    ]
})
export class FsPromptAutocompleteChipsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { FsCommonModule } from '@firestitch/common';
import { FsDialogModule } from '@firestitch/dialog';

import { FsPromptConfirmComponent } from './prompt-confirm.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        FsCommonModule,
        FsDialogModule,
    ],
    declarations: [
        FsPromptConfirmComponent,
    ]
})
export class FsPromptConfirmModule { }

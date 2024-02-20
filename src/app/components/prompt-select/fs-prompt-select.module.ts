import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FsDialogModule } from '@firestitch/dialog';

// Dialog
import { FsPromptSelectComponent } from './prompt-select.component';


@NgModule({
    imports: [
        // Angular
        CommonModule,
        FormsModule,
        // Material
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        FsDialogModule
    ],
    declarations: [
        FsPromptSelectComponent,
    ]
})
export class FsPromptSelectModule {}

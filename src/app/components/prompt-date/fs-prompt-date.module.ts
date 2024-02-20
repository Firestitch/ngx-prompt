import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { FsDialogModule } from '@firestitch/dialog';
import { FsDatePickerModule } from '@firestitch/datepicker';

// Dialog
import { FsPromptDateComponent } from './prompt-date.component';


@NgModule({
    imports: [
        // Angular
        CommonModule,
        ReactiveFormsModule,
        // Material
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        FsDialogModule,
        FsDatePickerModule,
    ],
    declarations: [
        FsPromptDateComponent,
    ]
})
export class FsPromptDateModule {}

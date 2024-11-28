import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// Dialog
import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule } from '@firestitch/form';

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

    FsDialogModule,
    FsFormModule,
  ],
  declarations: [
    FsPromptSelectComponent,
  ],
})
export class FsPromptSelectModule { }

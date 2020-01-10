import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  entryComponents: [
    FsPromptSelectComponent,
  ],
  declarations: [
    FsPromptSelectComponent,
  ],
})
export class FsPromptSelectModule {}

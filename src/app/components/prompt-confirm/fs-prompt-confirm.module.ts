import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Dialog
import { FsPromptConfirmComponent } from './prompt-confirm.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // Material
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [
    FsPromptConfirmComponent,
  ],
  declarations: [
    FsPromptConfirmComponent,
  ],
})
export class FsPromptConfirmModule {}

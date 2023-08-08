import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FsAutocompleteModule } from '@firestitch/autocomplete';
import { FsFormModule } from '@firestitch/form';
import { FsDialogModule } from '@firestitch/dialog';

// Dialog
import { FsPromptAutocompleteComponent } from './prompt-autocomplete.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,

    // Material
    MatDialogModule,
    MatButtonModule,

    // Firestitch
    FsAutocompleteModule,
    FsDialogModule,
    FsFormModule,
  ],
  entryComponents: [
    FsPromptAutocompleteComponent,
  ],
  declarations: [
    FsPromptAutocompleteComponent,
  ],
})
export class FsPromptAutocompleteModule {}

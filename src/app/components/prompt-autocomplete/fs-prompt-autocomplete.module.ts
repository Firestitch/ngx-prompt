import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FsAutocompleteModule } from '@firestitch/autocomplete';
import { FsDialogModule } from '@firestitch/dialog';

import { FsPromptAutocompleteComponent } from './prompt-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatDialogModule,
    MatButtonModule,

    FsAutocompleteModule,
    FsDialogModule,
  ],
  entryComponents: [
    FsPromptAutocompleteComponent,
  ],
  declarations: [
    FsPromptAutocompleteComponent,
  ],
})
export class FsPromptAutocompleteModule {}

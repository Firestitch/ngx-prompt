import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
} from '@angular/material';

// Dialog
import { FsPromptConfirmComponent } from './components/prompt-confirm/prompt-confirm.component';
import { FsPromptAutocompleteComponent } from './components/prompt-autocomplete/prompt-autocomplete.component';
import { FsPromptSelectComponent } from './components/prompt-select/prompt-select.component';
import { FsPromptInputComponent } from './components/prompt-input/prompt-input.component';

import { FsPrompt } from './services/prompt.service';
import { FsFormModule } from '@firestitch/form';
import { FsAutocompleteModule } from '@firestitch/autocomplete';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,

    FsFormModule,
    FsAutocompleteModule
  ],
  entryComponents: [
    FsPromptConfirmComponent,
    FsPromptInputComponent,
    FsPromptSelectComponent,
    FsPromptAutocompleteComponent,
  ],
  declarations: [
    FsPromptConfirmComponent,
    FsPromptInputComponent,
    FsPromptSelectComponent,
    FsPromptAutocompleteComponent,
  ],
  providers: [
    FsPrompt
  ],
})
export class FsPromptModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsPromptModule
    };
  }
}

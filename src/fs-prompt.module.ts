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
  MatAutocompleteModule,
} from '@angular/material';

// Dialog
import {  FsPromptConfirmComponent,
          FsPromptInputComponent,
          FsPromptSelectComponent,
          FsPromptAutocompleteComponent } from './components';
import { FsPrompt } from './services/fs-prompt.service';

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
    MatAutocompleteModule,
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
    FsPrompt,
  ],
})
export class FsPromptModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsPromptModule,
      providers: [FsPrompt]
    };
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FsAutocompleteModule } from '@firestitch/autocomplete';

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
    FsAutocompleteModule
  ],
  entryComponents: [
    FsPromptAutocompleteComponent,
  ],
  declarations: [
    FsPromptAutocompleteComponent,
  ],
})
export class FsPromptAutocompleteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsPromptAutocompleteModule,
      providers: []
    }
  }
}

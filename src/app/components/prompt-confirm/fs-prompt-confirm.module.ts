import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FsDialogModule } from '@firestitch/dialog';

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

    FsDialogModule
  ],
  entryComponents: [
    FsPromptConfirmComponent,
  ],
  declarations: [
    FsPromptConfirmComponent,
  ],
})
export class FsPromptConfirmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsPromptConfirmModule,
      providers: []
    }
  }
}

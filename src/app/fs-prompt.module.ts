import { NgModule, ModuleWithProviders } from '@angular/core';

import { FsPromptConfirmModule } from './components/prompt-confirm/fs-prompt-confirm.module';

// THIS MODULE ONLY FOR BACKWARD COMPATIBILITY
@NgModule({
  imports: [
    FsPromptConfirmModule,
  ],
  exports: [
    FsPromptConfirmModule,
  ],
})
export class FsPromptModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsPromptModule,
      providers: []
    }
  }
}

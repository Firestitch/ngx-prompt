import { ModuleWithProviders, NgModule } from '@angular/core';

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
  public static forRoot(): ModuleWithProviders<FsPromptModule> {
    return {
      ngModule: FsPromptModule,
      providers: [],
    };
  }
}

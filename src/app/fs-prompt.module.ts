import { ModuleWithProviders, NgModule } from '@angular/core';



// THIS MODULE ONLY FOR BACKWARD COMPATIBILITY
@NgModule({
  imports: [],
  exports: [],
})
export class FsPromptModule {
  public static forRoot(): ModuleWithProviders<FsPromptModule> {
    return {
      ngModule: FsPromptModule,
      providers: [],
    };
  }
}

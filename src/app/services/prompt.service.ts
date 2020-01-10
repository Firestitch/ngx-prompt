import {
  Injectable,
} from '@angular/core';

// Modal
import { MatDialog } from '@angular/material/dialog';

// RX
import { throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { IFsPromptConfig } from '../interfaces';

// Configs
import { FsPromptConfig, FsPromptConfirmConfig } from '../classes';

// Components for open in modal
import { FsPromptConfirmComponent } from '../components/prompt-confirm/prompt-confirm.component';
import { FsPromptAutocompleteComponent } from '../components/prompt-autocomplete/prompt-autocomplete.component';
import { FsPromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { FsPromptInputComponent } from '../components/prompt-input/prompt-input.component';
import { PromptType } from '../helpers/enums';



@Injectable({
  providedIn: 'root',
})
export class FsPrompt {

  constructor(private dialog: MatDialog) {}

  /**
   * Open confirmation window and return close observable
   */
  public confirm(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfirmConfig(config);

    return this.open(openConfig, PromptType.confirm);
  }

  /**
   * Open window with input field for filling
   */
  public input(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config);

    return this.open(openConfig, PromptType.input);
  }

  /**
   * Open modal with list
   */
  public select(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config);

    return this.open(openConfig, PromptType.select);
  }

  /**
   * Open modal with autocomplete
   */
  public autocomplete(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config);

    return this.open(openConfig, PromptType.autocomplete);
  }

  /**
   * Open modal dialog depends from type
   */
  private open(config: FsPromptConfig<any> | FsPromptConfirmConfig<any>, type: PromptType) {
    // Default classes for modal
    config.addDefaultPanelClasses(type);

    switch (type) {
      case PromptType.confirm: {
        return this.dialog
          .open(FsPromptConfirmComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => (value) ? of(value) : throwError('error'))
          );
      }

      case PromptType.input: {
        return this.dialog.open(FsPromptInputComponent, config.dialogConfig).afterClosed();
      }

      case PromptType.select: {
        return this.dialog.open(FsPromptSelectComponent, config.dialogConfig).afterClosed();
      }

      case PromptType.autocomplete: {
        return this.dialog.open(FsPromptAutocompleteComponent, config.dialogConfig).afterClosed();
      }

      default: return throwError('Erorr')
    }
  }
}

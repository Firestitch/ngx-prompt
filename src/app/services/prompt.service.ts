import { FsPromptDateComponent } from './../components/prompt-date/prompt-date.component';
import {
  Injectable,
} from '@angular/core';

// Modal
import { MatDialog } from '@angular/material/dialog';

// RX
import { throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { IFsPromptAutocompleteChipsConfig, IFsPromptConfig } from '../interfaces';

// Configs
import { FsPromptConfig, FsPromptConfirmConfig } from '../classes';

// Components for open in modal
import { FsPromptConfirmComponent } from '../components/prompt-confirm/prompt-confirm.component';
import { FsPromptAutocompleteComponent } from '../components/prompt-autocomplete/prompt-autocomplete.component';
import { FsPromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { FsPromptInputComponent } from '../components/prompt-input/prompt-input.component';
import { PromptType } from '../helpers/enums';
import { FsPromptAutocompleteChipsComponent } from '../components/prompt-autocomplete-chips/prompt-autocomplete-chips.component';



@Injectable({
  providedIn: 'root',
})
export class FsPrompt {

  constructor(private dialog: MatDialog) {}

  /**
   * Open confirmation window and return close observable
   */
  public confirm(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfirmConfig(config, PromptType.confirm);

    return this.open(openConfig);
  }

  /**
   * Open window with input field for filling
   */
  public input(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config, PromptType.input);

    return this.open(openConfig);
  }

  /**
   * Open modal with list
   */
  public select(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config, PromptType.select);

    return this.open(openConfig);
  }

  /**
   * Open modal with autocomplete
   */
  public autocomplete(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config, PromptType.autocomplete);

    return this.open(openConfig);
  }

  /**
   * Open modal with autocomplete chips
   */
  public autocompleteChips(config: IFsPromptAutocompleteChipsConfig = {}) {
    const openConfig = new FsPromptConfig(config, PromptType.autocompleteChips);

    return this.open(openConfig);
  }

  /**
   * Open modal with list
   */
  public dateTime(config: IFsPromptConfig = {}) {
    config.autofocus = false;
    const openConfig = new FsPromptConfig(config, PromptType.dateTime);

    return this.open(openConfig);
  }

  /**
   * Open modal with list
   */
  public date(config: IFsPromptConfig = {}) {
    config.autofocus = false;
    const openConfig = new FsPromptConfig(config, PromptType.date);

    return this.open(openConfig);
  }

  /**
   * Open modal dialog depends from type
   */
  private open(config: FsPromptConfig<any> | FsPromptConfirmConfig<any>) {
    // Default classes for modal
    config.addDefaultPanelClasses(config.type);

    switch (config.type) {
      case PromptType.confirm: {
        return this.dialog
          .open(FsPromptConfirmComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value))
          );
      }

      case PromptType.input: {
        return this.dialog.open(FsPromptInputComponent, config.dialogConfig)
        .afterClosed()
        .pipe(
          switchMap((value) => value === undefined ? throwError('error') : of(value))
        );
      }

      case PromptType.select: {
        return this.dialog.open(FsPromptSelectComponent, config.dialogConfig)
        .afterClosed()
        .pipe(
          switchMap((value) => value === undefined ? throwError('error') : of(value))
        )
      }

      case PromptType.autocomplete: {
        return this.dialog.open(FsPromptAutocompleteComponent, config.dialogConfig)
        .afterClosed()
        .pipe(
          switchMap((value) => value === undefined ? throwError('error') : of(value))
        )
      }

      case PromptType.autocompleteChips: {
        return this.dialog.open(FsPromptAutocompleteChipsComponent, config.dialogConfig)
        .afterClosed()
        .pipe(
          switchMap((value) => value === undefined ? throwError('error') : of(value))
        )
      }

      case PromptType.date:
      case PromptType.dateTime: {

        return this.dialog.open(FsPromptDateComponent, config.dialogConfig)
        .afterClosed()
        .pipe(
          switchMap((value) => value === undefined ? throwError('error') : of(value))
        )
      }

      default: return throwError('Erorr')
    }
  }

}

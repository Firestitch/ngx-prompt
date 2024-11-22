import {
  Injectable,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FsPromptAutocompleteChipsConfig, FsPromptAutocompleteConfig, FsPromptConfig, FsPromptConfirmConfig } from '../classes';
import { FsPromptAutocompleteChipsComponent } from '../components/prompt-autocomplete-chips/prompt-autocomplete-chips.component';
import { FsPromptAutocompleteComponent } from '../components/prompt-autocomplete/prompt-autocomplete.component';
import { FsPromptConfirmComponent } from '../components/prompt-confirm/prompt-confirm.component';
import { FsPromptInputComponent } from '../components/prompt-input/prompt-input.component';
import { FsPromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { PromptType } from '../helpers/enums';
import {
  IFsPromptAutocompleteChipsConfig, IFsPromptAutocompleteConfig, IFsPromptConfig,
  IFsPromptDateConfig, IFsPromptDateTimeConfig, IFsPromptDeleteConfig, IFsPromptInputConfig,
  IFsPromptSelectConfig,
} from '../interfaces';

import { FsPromptDateComponent } from './../components/prompt-date/prompt-date.component';


@Injectable({
  providedIn: 'root',
})
export class FsPrompt {

  constructor(
    private _dialog: MatDialog,
  ) { }

  /**
   * Open confirmation window and return close observable
   */
  public confirm(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfirmConfig(config, PromptType.confirm);

    return this._open(openConfig);
  }

  /**
   * Open confirmation window and return close observable
   */
  public delete(config: IFsPromptDeleteConfig = {}) {
    const objectType = config.objectType || 'item';

    config = {
      title: `Delete ${objectType}`,
      template: `Are you sure you want to delete this ${objectType}?`,
      buttons: [
        {
          label: 'Delete',
          color: 'primary',
        },
        {
          label: 'Cancel',
          cancel: true,
        },
      ],
      ...config,
    };

    const openConfig = new FsPromptConfirmConfig(config, PromptType.confirm);

    return this._open(openConfig);
  }

  /**
   * Open window with input field for filling
   */
  public input(config: IFsPromptInputConfig = {}) {
    const openConfig = new FsPromptConfig(config, PromptType.input);

    return this._open(openConfig);
  }

  /**
   * Open modal with list
   */
  public select(config: IFsPromptSelectConfig = {}) {
    const openConfig = new FsPromptConfig(config, PromptType.select);

    return this._open(openConfig);
  }

  /**
   * Open modal with autocomplete
   */
  public autocomplete(config: IFsPromptAutocompleteConfig = {}) {
    return this._open(new FsPromptAutocompleteConfig(config));
  }

  /**
   * Open modal with autocomplete chips
   */
  public autocompleteChips(config: IFsPromptAutocompleteChipsConfig = {}) {
    return this._open(new FsPromptAutocompleteChipsConfig(config));
  }

  /**
   * Open modal with list
   */
  public dateTime(config: IFsPromptDateTimeConfig = {}) {
    config.autofocus = false;
    const openConfig = new FsPromptConfig(config, PromptType.dateTime);

    return this._open(openConfig);
  }

  /**
   * Open modal with list
   */
  public date(config: IFsPromptDateConfig = {}) {
    config.autofocus = false;
    const openConfig = new FsPromptConfig(config, PromptType.date);

    return this._open(openConfig);
  }

  /**
   * Open modal dialog depends from type
   */
  private _open(config: (
    FsPromptConfig<any> | 
    FsPromptConfirmConfig<any> | 
    FsPromptAutocompleteChipsConfig<any> |
    FsPromptAutocompleteConfig<any>
  )) {
    // Default classes for modal
    config.addDefaultPanelClasses(config.type);

    switch (config.type) {
      case PromptType.confirm: {
        return this._dialog
          .open(FsPromptConfirmComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value)),
          );
      }

      case PromptType.input: {
        return this._dialog.open(FsPromptInputComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value)),
          );
      }

      case PromptType.select: {
        return this._dialog.open(FsPromptSelectComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value)),
          );
      }

      case PromptType.autocomplete: {
        return this._dialog.open(FsPromptAutocompleteComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value)),
          );
      }

      case PromptType.autocompleteChips: {
        return this._dialog.open(FsPromptAutocompleteChipsComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value)),
          );
      }

      case PromptType.date:
      case PromptType.dateTime: {

        return this._dialog.open(FsPromptDateComponent, config.dialogConfig)
          .afterClosed()
          .pipe(
            switchMap((value) => value === undefined ? throwError('error') : of(value)),
          );
      }

      default: return throwError('Erorr');
    }
  }

}

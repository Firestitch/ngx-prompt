import {
  Injectable,
} from '@angular/core';

// Modal
import { MatDialog } from '@angular/material/dialog';

// RX
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { IFsPromptConfig, FsValuesFunction } from '../interfaces';

// Configs
import { FsPromptConfig, FsPromptConfirmConfig } from '../classes';

// Components for open in modal
import { FsPromptConfirmComponent } from '../components/prompt-confirm/prompt-confirm.component';
import { FsPromptAutocompleteComponent } from '../components/prompt-autocomplete/prompt-autocomplete.component';
import { FsPromptSelectComponent } from '../components/prompt-select/prompt-select.component';
import { FsPromptInputComponent } from '../components/prompt-input/prompt-input.component';


export enum PromptType {
  confirm = 'confirm',
  input = 'input',
  select = 'select',
  autocomplete = 'autocomplete'
}

export enum ConverterType {
  observable = 0,
  promise = 1,
  array = 2
}

@Injectable()
export class FsPrompt {

  /**
   * Values converter
   *
   * @param {Observable<T> | Promise<T> | Array<T> | FsValuesFunction} values
   */
  static valuesConverter<T>(values: Observable<T> | Promise<T> | T[] | FsValuesFunction) {
    const nativeObjectToString = Object.prototype.toString;

    if (nativeObjectToString.call(values) === '[object Function]') { // check if it Function
      return this.valuesConverter((values as Function)())
    } else {
      if (values instanceof Observable) { // check if it Observable
        return {
          type: ConverterType.observable,
          values: values
        }
      } else if (!!values && (typeof values === 'object' || typeof values === 'function') // check if it Promise
        && typeof (values as Promise<T>).then === 'function') {
        return {
          type: ConverterType.promise,
          values: values
        }
      } else if (Array.isArray(values)) { // check if it Array
        return {
          type: ConverterType.array,
          values: values
        }
      } else { // if we can't detect type
        return false;
      }
    }
  }

  constructor(private dialog: MatDialog) {}

  /**
   * Open confirmation window and return close observable
   *
   * @param {IFsPromptConfig} config
   * @returns {Observable<any>}
   */
  public confirm(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfirmConfig(config);

    return this.open(openConfig, PromptType.confirm);
  }

  /**
   * Open window with input field for filling
   *
   * @param {IFsPromptConfig} config
   * @returns {Observable<any> | boolean}
   */
  public input(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config);

    return this.open(openConfig, PromptType.input);
  }

  /**
   * Open modal with list
   *
   * @param {IFsPromptConfig} config
   */
  public select(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config);

    return this.open(openConfig, PromptType.select);
  }

  /**
   * Open modal with autocomplete
   *
   * @param {IFsPromptConfig} config
   * @returns {Observable<any> | boolean}
   */
  public autocomplete(config: IFsPromptConfig = {}) {
    const openConfig = new FsPromptConfig(config);

    return this.open(openConfig, PromptType.autocomplete);
  }

  /**
   * Open modal dialog depends from type
   *
   * @param {IFsPromptConfig} config
   * @param {PromptType} type
   * @returns {any}
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

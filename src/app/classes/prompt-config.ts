import { MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { FsValuesFunction } from '../interfaces';
import { IFsPromptConfig } from '../interfaces';
import { PromptType } from '../helpers/enums';


export class FsPromptConfig<T> {

  public title = '';
  public template = '';
  public hint = '';
  public label = '';
  public class = '';
  public commitLabel = 'Ok';
  public cancelLabel = 'Cancel';
  public commitShow = true;
  public cancelShow = true;
  public escape = true;
  public default;
  public autofocus = true;
  public type: PromptType;
  public buttons = [];

  public values: Observable<T> | Promise<T> | T[] | FsValuesFunction = [];

  protected _dialogConfig: MatDialogConfig;
  protected _defaultDialogConfig = {
    width: '500px',
    height: 'auto'
  };

  constructor(
    public config: IFsPromptConfig,
    public promptType: PromptType,
  ) {
    this.type = promptType;
    this.applyConfig(config);
    this.applyDialogConfig(config);
  }

  get dialogConfig() {

    const config = Object.assign({}, this._dialogConfig);
    config.data = this;

    config.autoFocus ?? true;

    return config
  }

  set dialogConfig(value) {
    this._dialogConfig = value;
  }

  public addDefaultPanelClasses(type: string) {
    // FIXME replace this with FsUtil or something else
    if (typeof this._dialogConfig.panelClass === 'string' || this._dialogConfig.panelClass instanceof String) {
      this._dialogConfig.panelClass = this._dialogConfig.panelClass.split(' ');
    }

    if (!Array.isArray(this._dialogConfig.panelClass)) {
      this._dialogConfig.panelClass = [];
    }

    this._dialogConfig.panelClass.push('fs-prompt', 'fs-prompt-' + type);
  }

  protected applyConfig(config: IFsPromptConfig) {
    Object.assign(this, config);
  }

  protected applyDialogConfig(config: IFsPromptConfig) {
    const inputDialogConfig = config.dialogConfig;

    // Previously let's assign default config
    this._dialogConfig = { ...this._defaultDialogConfig, autoFocus: this.autofocus };

    // Then assign passed config
    if (inputDialogConfig) {
      Object.assign(this._dialogConfig, inputDialogConfig);
    }

    // Assign panel class (class for modal container) only if we don't have this class in modal options
    if (config.class) {
      this._dialogConfig.panelClass = config.class;
    }
  }
}

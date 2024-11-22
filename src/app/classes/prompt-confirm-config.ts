import { IFsPromptConfig } from '../interfaces';

import { FsPromptConfig } from './prompt-config';

export class FsPromptConfirmConfig<T> extends FsPromptConfig<T> {

  protected _applyConfig(config) {
    super._applyConfig(config);

    if (!config.title) {
      config.title = 'Confirm';
    }

    if (!config.class) {
      config.class = 'fs-modal-confirm';
    }

    if (!this.buttons.length) {
      if (this.commitShow) {
        this.buttons.push({
          label: this.commitLabel,
          color: 'primary',
        });
      }

      if (this.cancelShow) {
        this.buttons.push({
          label: this.cancelLabel,
          cancel: true,
          color: '',
        });
      }
    }
  }

  protected _applyDialogConfig(config: IFsPromptConfig) {
    super._applyDialogConfig(config);
    const inputDialogConfig = config.dialogConfig;
    // Confrim has small width by default than other types
    if (!inputDialogConfig || inputDialogConfig.width === undefined) {
      this._dialogConfig.width = '350px';
    }
  }
}

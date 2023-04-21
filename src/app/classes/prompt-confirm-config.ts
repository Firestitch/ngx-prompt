import { FsPromptConfig } from './prompt-config';
import { IFsPromptConfig } from '../interfaces';

export class FsPromptConfirmConfig<T> extends FsPromptConfig<T> {

  protected applyConfig(config) {
    super.applyConfig(config);

    if (!config.title) {
      config.title = 'Confirm';
    }

    if (!config.class) {
      config.class = 'fs-modal-confirm'
    }

    if (!this.buttons.length) {
      if (this.commitShow) {
        this.buttons.push({
          label: this.commitLabel,
          color: 'primary'
        });
      }

      if (this.cancelShow) {
        this.buttons.push({
          label: this.cancelLabel,
          cancel: true,
          color: ''
        });
      }
    }
  }

  protected applyDialogConfig(config: IFsPromptConfig) {
    super.applyDialogConfig(config);
    const inputDialogConfig = config.dialogConfig;
    // Confrim has small width by default than other types
    if (!inputDialogConfig || inputDialogConfig.width === void 0) {
      this._dialogConfig.width = '250px';
    }
  }
}

import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IFsPromptAutocompleteChipsConfig, IFsPromptConfig } from '../../interfaces';


@Component({
  selector: 'fs-prompt-autocomplete-chips',
  templateUrl: 'prompt-autocomplete-chips.component.html',
  styleUrls: [ '../../prompt.css', 'prompt-autocomplete-chips.component.scss' ],
})
export class FsPromptAutocompleteChipsComponent {
  
  @ViewChild('autocomplete', { static: false })
  public autocomplete: FsPromptAutocompleteChipsComponent;

  public model;
  public config: IFsPromptAutocompleteChipsConfig = {
    default: [],
  };
  public promptInputForm = new FormGroup({
    input: new FormControl(''),
  });

  constructor(
    private _dialogRef: MatDialogRef<FsPromptAutocompleteChipsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {    
    this.config = {
      ...this.config,
      ...data.config,
    };

    this.model = this.config.default;
  }

  public fetch = (name: string) => {
    return this.data.values(name);
  };

  public validateText = (name: string) => {
    return !this.config.allowText || this.config.validateText(name);
  };

  public complete() {
    const model = this.model
    .map((item) => {
      return this.config.allowText ? item : item.value;
    });

    this._dialogRef.close(model);
  }
}

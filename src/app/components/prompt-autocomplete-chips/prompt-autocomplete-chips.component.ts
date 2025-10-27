import { ChangeDetectionStrategy, Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import { FsPromptAutocompleteChipsConfig } from '../../classes';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsAutocompleteChipsModule } from '@firestitch/autocomplete-chips';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'fs-prompt-autocomplete-chips',
    templateUrl: './prompt-autocomplete-chips.component.html',
    styleUrls: ['../../prompt.css', './prompt-autocomplete-chips.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsDialogModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsAutocompleteChipsModule,
        FormsModule,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FsPromptAutocompleteChipsComponent {
  private _dialogRef = inject<MatDialogRef<FsPromptAutocompleteChipsComponent>>(MatDialogRef);
  config = inject<FsPromptAutocompleteChipsConfig<any>>(MAT_DIALOG_DATA);

  
  @ViewChild('autocomplete')
  public autocomplete: FsPromptAutocompleteChipsComponent;

  public model;

  public promptInputForm = new UntypedFormGroup({
    input: new UntypedFormControl(''),
  });

  constructor() {    
    this.model = this.config.default;
  }

  public fetch = (keyword: string) => {
    return this.config.values(keyword);
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

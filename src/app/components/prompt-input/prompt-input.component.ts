import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import { FsValidators } from '@firestitch/form';

import { IFsPromptInputConfig } from '../../interfaces';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatSuffix, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgClass } from '@angular/common';
import { MatButton } from '@angular/material/button';


@Component({
    templateUrl: './prompt-input.component.html',
    styleUrls: ['../../prompt.css', './prompt-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatFormField,
        MatLabel,
        MatInput,
        CdkTextareaAutosize,
        MatSuffix,
        MatHint,
        NgClass,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FsPromptInputComponent implements OnInit {
  private _data = inject(MAT_DIALOG_DATA);
  private _dialogRef = inject<MatDialogRef<FsPromptInputComponent>>(MatDialogRef);


  public config: IFsPromptInputConfig;
  public inputMode: 'text' | 'email' | 'numeric' | 'decimal' = 'text';

  public promptInputForm = new UntypedFormGroup({
    input: new UntypedFormControl(''),
  });

  public get inputControl(): AbstractControl {
    return this.promptInputForm.get('input');
  }

  public ngOnInit(): void {
    this.config = this._data;
    this._init();
  }

  public complete() {
    if (this.inputControl.valid) {
      this._dialogRef.close(this.inputControl.value);
    }
  }

  private _init() {
    this.inputControl.setValue(this._data.default);
    this._applyValidators();
  }

  private _applyValidators(): void {
    if (this._data.required) {
      this.inputControl.addValidators(Validators.required);
    }

    if (this._data.min != undefined) {
      this.inputControl.addValidators(Validators.min(this._data.min));

      if (!this._data.numeric && !this._data.integer) {
        this._data.numeric = true;
      }
    }

    if (this._data.max != undefined) {
      this.inputControl.addValidators(Validators.max(this._data.max));

      if (!this._data.numeric && !this._data.integer) {
        this._data.numeric = true;
      }
    }

    if (this._data.numeric) {
      this.inputControl.addValidators(FsValidators.numeric);

      this.inputMode = 'decimal';
    }

    if (this._data.integer) {
      this.inputControl.addValidators(FsValidators.integer);

      this.inputMode = 'numeric';
    }

    if (this._data.email) {
      this.inputControl.addValidators(FsValidators.email);

      this.inputMode = 'email';
    }
  }
}

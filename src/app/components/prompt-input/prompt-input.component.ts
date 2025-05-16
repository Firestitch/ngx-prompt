import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FsValidators } from '@firestitch/form';

import { IFsPromptInputConfig } from '../../interfaces';


@Component({
  templateUrl: './prompt-input.component.html',
  styleUrls: ['../../prompt.css', './prompt-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsPromptInputComponent implements OnInit {

  public config: IFsPromptInputConfig;

  public promptInputForm = new UntypedFormGroup({
    input: new UntypedFormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<FsPromptInputComponent>,
  ) {}

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
    }

    if (this._data.max != undefined) {
      this.inputControl.addValidators(Validators.max(this._data.max));
    }

    if (this._data.numeric != undefined) {
      this.inputControl.addValidators(FsValidators.numeric);
    }

    if (this._data.integer != undefined) {
      this.inputControl.addValidators(FsValidators.integer);
    }

    if (this._data.email != undefined) {
      this.inputControl.addValidators(FsValidators.email);
    }
  }
}

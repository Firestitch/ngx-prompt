import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { AbstractControl, FormsModule, NgModel, Validators } from '@angular/forms';

import { CdkScrollable } from '@angular/cdk/scrolling';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule, FsValidators } from '@firestitch/form';

import { of } from 'rxjs';

import { IFsPromptInputConfig } from '../../interfaces';


@Component({
  templateUrl: './prompt-input.component.html',
  styleUrls: ['../../prompt.css', './prompt-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FsDialogModule,
    FsFormModule,
    FormsModule,
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

  public config: IFsPromptInputConfig;
  public inputMode: 'text' | 'email' | 'numeric' | 'decimal' = 'text';
  public inputValue: any = '';

  private _data = inject(MAT_DIALOG_DATA);
  private _dialogRef = inject<MatDialogRef<FsPromptInputComponent>>(MatDialogRef);
  private _cdRef = inject(ChangeDetectorRef);
  private _inputModel: NgModel;
  private _validatorsApplied = false;

  @ViewChild(NgModel) public set inputModelRef(model: NgModel) {
    if (model && !this._validatorsApplied) {
      this._inputModel = model;
      this._applyCustomValidators(model.control);
      this._validatorsApplied = true;
      this._cdRef.markForCheck();
    }
  }

  public get inputControl(): AbstractControl | null {
    return this._inputModel?.control;
  }

  public ngOnInit(): void {
    this.config = this._data;
    this.inputValue = this._data.default;
    this._initInputMode();
  }

  public submit = () => {
    this._dialogRef.close(this.inputValue);

    return of(true);
  };

  private _initInputMode(): void {
    if (this._data.min !== undefined) {
      if (!this._data.numeric && !this._data.integer) {
        this._data.numeric = true;
      }
    }

    if (this._data.max !== undefined) {
      if (!this._data.numeric && !this._data.integer) {
        this._data.numeric = true;
      }
    }

    if (this._data.numeric) {
      this.inputMode = 'decimal';
    }

    if (this._data.integer) {
      this.inputMode = 'numeric';
    }

    if (this._data.email) {
      this.inputMode = 'email';
    }
  }

  private _applyCustomValidators(control: AbstractControl): void {
    if (this._data.min !== undefined) {
      control.addValidators(Validators.min(this._data.min));
    }

    if (this._data.max !== undefined) {
      control.addValidators(Validators.max(this._data.max));
    }

    if (this._data.numeric) {
      control.addValidators(FsValidators.numeric);
    }

    if (this._data.integer) {
      control.addValidators(FsValidators.integer);
    }

    if (this._data.email) {
      control.addValidators(FsValidators.email);
    }

    control.updateValueAndValidity();
  }
}

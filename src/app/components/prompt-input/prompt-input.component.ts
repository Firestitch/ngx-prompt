import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'prompt-input.component.html',
  styleUrls: [ '../../prompt.css' ],
  styles: [
    `
      .form-error {
        color: #f44336;
      }
    `
  ]
})
export class FsPromptInputComponent implements OnInit {

  public promptInputForm = new FormGroup({
    input: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<FsPromptInputComponent>,
  ) {}

  public get inputControl(): AbstractControl {
    return this.promptInputForm.get('input');
  }

  public ngOnInit(): void {
    this._init();
  }

  public complete() {
    if (this.inputControl.valid) {
      this._dialogRef.close(this.inputControl.value);
    }
  }

  private _init() {
    this.inputControl.setValue(this.data.default);

    if (this.data.required) {
      this.inputControl.setValidators(Validators.required);
    }
  }
}

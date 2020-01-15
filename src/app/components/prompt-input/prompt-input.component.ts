import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

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

  public input = new FormControl('');


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<FsPromptInputComponent>,
  ) {}

  public ngOnInit(): void {
    this._init();
  }

  public complete() {
    if (this.input.valid) {
      this._dialogRef.close(this.input.value);
    }
  }

  private _init() {
    this.input.setValue(this.data.default);

    if (this.data.required) {
      this.input.setValidators(Validators.required);
    }
  }
}

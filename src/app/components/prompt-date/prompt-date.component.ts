import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { MatButton } from '@angular/material/button';

@Component({
    templateUrl: './prompt-date.component.html',
    styleUrls: ['../../prompt.css'],
    styles: [
        `
      .form-error {
        color: #f44336;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsDialogModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        FsDatePickerModule,
        ReactiveFormsModule,
        MatHint,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FsPromptDateComponent implements OnInit {

  public input = new UntypedFormControl('');
  public promptType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<FsPromptDateComponent>,
  ) {
    this.promptType = this.data.promptType;
  }

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

import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FsDialogModule } from '@firestitch/dialog';
import { FsFormModule } from '@firestitch/form';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsDatePickerModule } from '@firestitch/datepicker';
import { MatButton } from '@angular/material/button';

import { of } from 'rxjs';

@Component({
    templateUrl: './prompt-date.component.html',
    styleUrls: ['../../prompt.css', './prompt-date.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsDialogModule,
        FsFormModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        FsDatePickerModule,
        MatHint,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class FsPromptDateComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  private _dialogRef = inject<MatDialogRef<FsPromptDateComponent>>(MatDialogRef);

  public inputValue: any = '';
  public promptType;

  constructor() {
    this.promptType = this.data.promptType;
  }

  public ngOnInit(): void {
    this.inputValue = this.data.default;
  }

  public submit = () => {
    this._dialogRef.close(this.inputValue);

    return of(true);
  };
}

import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

import { FsCommonModule } from '@firestitch/common';
import { FsDialogModule } from '@firestitch/dialog';

@Component({
  templateUrl: './prompt-confirm.component.html',
  styleUrls: ['../../prompt.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FsDialogModule,
    MatDialogTitle,
    CdkScrollable,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    FsCommonModule,
    NgClass,
  ],
})
export class FsPromptConfirmComponent {
  
  public data = inject(MAT_DIALOG_DATA);
  public template;

  private _dialogRef = inject<MatDialogRef<FsPromptConfirmComponent>>(MatDialogRef);
  private _sanitizer = inject(DomSanitizer);

  constructor() {
    const data = this.data;

    this.template = this._sanitizer.bypassSecurityTrustHtml(data.template);
  }

  public close(button) {
    const value = button.cancel ? undefined : button.value || true;
    this._dialogRef.close(value);
  }
}

import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { FsDialogModule } from '@firestitch/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';
import { FsCommonModule } from '@firestitch/common';
import { NgClass } from '@angular/common';

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

  public template;

  constructor(
    private _dialogRef: MatDialogRef<FsPromptConfirmComponent>,
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.template = this._sanitizer.bypassSecurityTrustHtml(data.template);
  }

  public close(button) {
    const value = button.cancel ? undefined : button.value || true;
    this._dialogRef.close(value);
  }
}

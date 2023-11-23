import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './prompt-confirm.component.html',
  styleUrls: ['../../prompt.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

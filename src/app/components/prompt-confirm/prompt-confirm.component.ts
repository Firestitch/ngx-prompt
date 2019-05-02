import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './prompt-confirm.component.html',
  styleUrls: [ '../../prompt.css' ],
})
export class FsPromptConfirmComponent {

  public template;

  constructor(
    public dialogRef: MatDialogRef<FsPromptConfirmComponent>,
    protected sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.template = this.sanitizer.bypassSecurityTrustHtml(data.template);
  }

  close(button) {
    const value = button.cancel ? false : button.value || true;
    this.dialogRef.close(value);

  }
}

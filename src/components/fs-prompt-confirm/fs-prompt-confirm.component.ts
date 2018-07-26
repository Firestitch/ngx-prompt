import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './fs-prompt-confirm.component.html',
  styleUrls: [ '../../fsprompt.css' ],
})
export class FsPromptConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<FsPromptConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(button) {
    const value = button.cancel ? false : button.value || true;
    this.dialogRef.close(value);
    
  }
}

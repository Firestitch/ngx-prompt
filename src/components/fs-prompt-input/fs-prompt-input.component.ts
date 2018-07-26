import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: 'fs-prompt-input.component.html',
  styleUrls: [ '../../fsprompt.css' ],
})
export class FsPromptInputComponent {

  public inputValue = '';

  constructor(
    public dialogRef: MatDialogRef<FsPromptInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public complete() {
    this.dialogRef.close(this.inputValue);
  }
}

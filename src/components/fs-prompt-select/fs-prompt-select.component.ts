import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FsPrompt, ConverterType } from '../../services/fs-prompt.service';

@Component({
  templateUrl: 'fs-prompt-select.component.html',
  styleUrls: [ '../../fsprompt.css' ],
})
export class FsPromptSelectComponent implements OnInit {

  public result;
  public loading = false;
  public items = [];
  public error = false;

  constructor(
    public dialogRef: MatDialogRef<FsPromptSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public ngOnInit() {
    this.loadItems();
  }

  public complete() {
    this.dialogRef.close(this.result);
  }

  private loadItems() {
    const result = FsPrompt.valuesConverter(this.data.values);

    switch (result.type) {
      case ConverterType.observable: {
        this.loading = true;
        result.values.subscribe((response) => {
          this.items = response;
          this.loading = false;
        }, () => {
          this.error = true;
          this.loading = false;
        })
      } break;

      case ConverterType.promise: {
        this.loading = true;
        result.values.then((response) => {
          this.items = response;
          this.loading = false;
        }, () => {
          this.error = true;
          this.loading = false;
        })
      } break;

      case ConverterType.array: {
        this.items = this.data.values;
      } break;

      default: {
        this.error = true;
      }
    }
  }
}

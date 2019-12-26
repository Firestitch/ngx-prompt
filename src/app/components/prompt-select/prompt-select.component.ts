import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { valuesConverter } from '../../helpers/values-converter';
import { ConverterType } from '../../helpers/enums';


@Component({
  templateUrl: 'prompt-select.component.html',
  styleUrls: [ '../../prompt.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsPromptSelectComponent implements OnInit {

  public result;
  public loading = false;
  public items = [];
  public error = false;

  constructor(
    public dialogRef: MatDialogRef<FsPromptSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cdRef: ChangeDetectorRef,
  ) {
  }

  public ngOnInit() {
    this.loadItems();
  }

  public modelChange(e) {
    this.dialogRef.close(this.result);
  }

  private loadItems() {
    const result = valuesConverter(this.data.values);

    switch (result.type) {
      case ConverterType.observable: {
        this.loading = true;
        result.values
        .subscribe((response) => {
          this.items = response;
          this.loading = false;
          this._cdRef.markForCheck();
        }, () => {
          this.error = true;
          this.loading = false;
          this._cdRef.markForCheck();
        })
      } break;

      case ConverterType.promise: {
        this.loading = true;
        result.values.then((response) => {
          this.items = response;
          this.loading = false;
          this._cdRef.markForCheck();
        }, () => {
          this.error = true;
          this.loading = false;
          this._cdRef.markForCheck();
        })
      } break;

      case ConverterType.array: {
        this.items = this.data.values;
        this._cdRef.markForCheck();
      } break;

      default: {
        this.error = true;
        this._cdRef.markForCheck();
      }
    }
  }
}

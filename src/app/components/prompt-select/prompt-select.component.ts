import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ConverterType } from '../../helpers/enums';
import { valuesConverter } from '../../helpers/values-converter';
import { IFsPromptSelectConfig } from '../../interfaces';


@Component({
  templateUrl: './prompt-select.component.html',
  styleUrls: ['../../prompt.css', './prompt-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsPromptSelectComponent implements OnInit {

  public result;
  public loading = false;
  public items = [];
  public error = false;
  public config: IFsPromptSelectConfig = {};

  constructor(
    public dialogRef: MatDialogRef<FsPromptSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cdRef: ChangeDetectorRef,
  ) {
  }

  public ngOnInit() {
    this.config = {
      ...this.config,
      ...this.data.config,
    };
    this._loadItems();
  }

  public change() {
    if(this.config.commitOnSelect) {
      this.select();
    }
  }

  public select() {
    if(this.result) {
      this.dialogRef.close(this.result);
    }
  }

  private _loadItems() {
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
          });
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
        });
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

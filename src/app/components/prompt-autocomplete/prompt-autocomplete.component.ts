import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IFsPromptAutocompleteConfig } from '../../interfaces';


@Component({
  selector: 'fs-prompt-autocomplete',
  templateUrl: './prompt-autocomplete.component.html',
  styleUrls: [
    '../../prompt.css',
    './prompt-autocomplete.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsPromptAutocompleteComponent {

  public inputControl = new FormControl('', []);
  public filteredItems: Observable<any[]>;
  public result;
  public loading = false;
  public items = [];
  public error = false;
  public model;
  public config: IFsPromptAutocompleteConfig = {};

  constructor(
    public dialogRef: MatDialogRef<FsPromptAutocompleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.config = {
      fetchOnFocus: true,
      ...this.config,
      ...data.config,
    };
  }

  public fetch = (name: string) => {
    return this.data.values(name);
  };

  public select() {
    this.dialogRef.close(this.result.value);
  }

  public change() {
    if(this.config.commitOnSelect) {
      this.select();
    }
  }

  public displayWith(value) {
    return value ? value.name : undefined;
  }
}

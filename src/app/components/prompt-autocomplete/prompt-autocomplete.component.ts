import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable } from 'rxjs';

@Component({
  selector: 'fs-prompt-autocomplete',
  templateUrl: 'prompt-autocomplete.component.html',
  styleUrls: [ '../../prompt.css', 'prompt-autocomplete.component.scss' ],
})
export class FsPromptAutocompleteComponent {

  public inputControl = new FormControl('', []);
  public filteredItems: Observable<any[]>;
  public result;
  public loading = false;
  public items = [];
  public error = false;
  public model;

  constructor(
    public dialogRef: MatDialogRef<FsPromptAutocompleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public fetch = (name: string) => {
    return this.data.values(name);
  };

  public modelChange(result) {
    if (result) {
      this.dialogRef.close(result.value);
    }
  }

  public displayWith(value) {
    return value ? value.name : undefined;
  }
}

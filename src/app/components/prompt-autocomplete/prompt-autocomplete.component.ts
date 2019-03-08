import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { valuesConverter } from '../../helpers/values-converter';
import { ConverterType } from '../../helpers/enums';


@Component({
  selector: 'fs-prompt-autocomplete',
  templateUrl: 'prompt-autocomplete.component.html',
  styleUrls: [ '../../prompt.css' ],
})
export class FsPromptAutocompleteComponent implements OnInit {

  public inputControl = new FormControl('', []);
  public filteredItems: Observable<any[]>;
  public result;
  public loading = false;
  public items = [];
  public error = false;

  constructor(
    public dialogRef: MatDialogRef<FsPromptAutocompleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public ngOnInit() {
    this.loadItems();

    this.filteredItems = this.inputControl.valueChanges
      .pipe(
        startWith(''),
        map((item: any) => typeof item === 'string' ? item : item.name),
        map(item => item ? this.filterItems(item) : this.items.slice())
      );
  }

  public complete() {
    this.dialogRef.close(this.result);
  }

  public setSelectedValue(event: MatAutocompleteSelectedEvent) {
    if (event) {
      this.result = event.option.value.value;
    }
  }

  public displayWith(value) {
    return value ? value.name : undefined;
  }

  /**
   * Load items depend from values type
   */
  private loadItems() {
    let result = valuesConverter(this.data.values);

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

  private filterItems(name: string) {
    return this.items.filter(item =>
      item.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}

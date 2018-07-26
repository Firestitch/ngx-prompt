import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FsPrompt, ConverterType } from '../../services/fs-prompt.service';
import { Observable } from 'rxjs/Observable';

import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'fs-prompt-autocomplete',
  templateUrl: 'fs-prompt-autocomplete.component.html',
  styleUrls: [ '../../fsprompt.css' ],
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
    let result = FsPrompt.valuesConverter(this.data.values);

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

  /**
   * Filter items by name
   * @param {string} name
   * @returns {any[]}
   */
  private filterItems(name: string) {
    return this.items.filter(item =>
      item.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}

import { Component } from '@angular/core';
import { FsPrompt } from '@firestitch/prompt';
import { of } from 'rxjs';

@Component({
  selector: 'autocomplete-example',
  templateUrl: 'autocomplete.component.html'
})
export class AutocompleteComponent {

  public selectAutoValue = false;

  constructor(public fsPrompt: FsPrompt) {}

  public openAutocomplete() {

    this.fsPrompt.autocomplete({
      label: 'Please select a user',
      title: 'Auto Complete Prompt',
      values: (keyword) => {
        return of([
          { name: 'Bob', value: '1' },
          { name: 'Ryan', value: '2' },
          { name: 'Jim', value: '3' }
      ].filter(item => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0 || !keyword
      }));
      }
    }).subscribe((result: any) => {
      this.selectAutoValue = result;
    })
  }
}

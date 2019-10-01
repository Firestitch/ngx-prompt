import { Component } from '@angular/core';
import { FsPrompt } from '@firestitch/prompt';
import { of } from 'rxjs';

@Component({
  selector: 'autocomplete-example',
  styleUrls: ['autocomplete.component.scss'],
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
          { name: 'Bob', value:  { id: 1, name: 'Bob' } },
          { name: 'Ryan', value: { id: 2, name: 'Ryan' } },
          { name: 'Jim', value: { id: 3, name: 'Jim' } }
      ].filter(item => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0 || !keyword
      }));
      }
    }).subscribe((result: any) => {
      this.selectAutoValue = result;
    })
  }
}

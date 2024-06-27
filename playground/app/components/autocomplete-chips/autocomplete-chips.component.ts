import { ChangeDetectionStrategy, Component } from '@angular/core';

import { email } from '@firestitch/common';
import { FsPrompt } from '@firestitch/prompt';

import { of } from 'rxjs';


@Component({
  selector: 'autocomplete-chips-example',
  styleUrls: ['./autocomplete-chips.component.scss'],
  templateUrl: './autocomplete-chips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteChipsComponent {

  public selected = false;

  constructor(public _prompt: FsPrompt) {}

  public openAutocomplete() {
    this._prompt.autocompleteChips({
      label: 'Please select a user',
      title: 'Auto Complete Prompt',
      values: (keyword) => {
        return of([
          { name: 'Bob', value:  { id: 1, name: 'Bob' } },
          { name: 'Ryan', value: { id: 2, name: 'Ryan' } },
          { name: 'Jim', value: { id: 3, name: 'Jim' } },
        ].filter((item) => {
          return item.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0 || !keyword;
        }));
      },
    }).subscribe((result: any) => {
      this.selected = result;
    }, () => {
      console.log('Cancelled');
    });
  }
  
  public openAutocompleteEmail() {
    this._prompt.autocompleteChips({
      label: 'Please select email addresses',
      title: 'Auto Complete Email Prompt',
      allowText: true,
      validateText: (string) => {
        return email(string);
      },
    }).subscribe((result: any) => {
      this.selected = result;
    }, () => {
      console.log('Cancelled');
    });
  }
}

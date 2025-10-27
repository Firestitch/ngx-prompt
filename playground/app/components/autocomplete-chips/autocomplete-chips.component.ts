import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { email } from '@firestitch/common';
import { FsPrompt } from '@firestitch/prompt';

import { of } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';
import { JsonPipe } from '@angular/common';


@Component({
    selector: 'autocomplete-chips-example',
    styleUrls: ['./autocomplete-chips.component.scss'],
    templateUrl: './autocomplete-chips.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatButton,
        FsFormModule,
        JsonPipe,
    ],
})
export class AutocompleteChipsComponent {
  _prompt = inject(FsPrompt);


  public selected = false;

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

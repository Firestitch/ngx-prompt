import { Component } from '@angular/core';
import { FsPrompt } from '@firestitch/prompt';
import { Subject } from 'rxjs';

@Component({
  selector: 'autocomplete-example',
  templateUrl: 'autocomplete.component.html'
})
export class AutocompleteComponent {

  public selectAutoValue = false;

  constructor(public fsPrompt: FsPrompt) {}

  public openAutocomplete() {
    const testObservable = new Subject<any>();

    // Array test case
    const simpleArray = [
      { name: 'Dave', value: 'dave' },
      { name: 'Mike', value: 'mike' }
    ];

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 100);

    this.fsPrompt.autocomplete({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    }).subscribe((result: any) => {
      this.selectAutoValue = result;
    })
  }
}

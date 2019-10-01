import { Component } from '@angular/core';
import { FsPrompt } from '@firestitch/prompt';

import { Subject } from 'rxjs';

@Component({
  selector: 'select-example',
  templateUrl: 'select.component.html'
})
export class SelectComponent {

  public selectValue = false;

  constructor(public fsPrompt: FsPrompt) {}

  public openSelect() {
    const testObservable = new Subject<any>();

    // Array test case
    const simpleArray = [
      { name: 'Dave', value: { id: 1, name: 'Dave' } },
      { name: 'Mike', value: { id: 2, name: 'Mike' } }
    ];

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 100);

    this.fsPrompt.select({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      title: 'Select Prompt',
      required: true,
      values: () => {
        return testObservable;
      }
    }).subscribe((result: any) => {
      this.selectValue = result;
    })
  }
}

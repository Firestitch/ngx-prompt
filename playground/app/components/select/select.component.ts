import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsPrompt } from '@firestitch/prompt';

import { Subject } from 'rxjs';

@Component({
  selector: 'select-example',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {

  public selectValue = false;

  constructor(private _prompt: FsPrompt) {}

  public openSelect() {
    const testObservable = new Subject<any>();

    // Array test case
    const simpleArray = [
      { name: 'Dave', value: { id: 1, name: 'Dave' } },
      { name: 'Mike', value: { id: 2, name: 'Mike' } },
    ];

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 100);

    this._prompt.select({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      title: 'Select Prompt',
      required: true,
      commitOnSelect: true,
      values: () => {
        return testObservable;
      },
    }).subscribe((result: any) => {
      this.selectValue = result;
    }, () => {
      console.log('Cancelled');
    });
  }
}

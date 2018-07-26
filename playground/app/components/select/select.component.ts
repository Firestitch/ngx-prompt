import { Component } from '@angular/core';
import { FsPrompt } from '../../../../src';
import { Subject } from 'rxjs/Subject';

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
      { name: 'Dave', value: 'dave'},
      { name: 'Mike', value: 'mike' }
    ];

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 100);

    this.fsPrompt.select({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    }).subscribe((result: any) => {
      this.selectValue = result;
    })
  }
}

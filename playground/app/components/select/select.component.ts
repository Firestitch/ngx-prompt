import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FsPrompt } from '@firestitch/prompt';

import { Subject } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'select-example',
    templateUrl: './select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatButton,
        FsFormModule,
        JsonPipe,
    ],
})
export class SelectComponent {
  private _prompt = inject(FsPrompt);


  public selectValue = false;

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

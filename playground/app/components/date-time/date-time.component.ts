import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsPrompt } from '@firestitch/prompt';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';


@Component({
    selector: 'date-time-example',
    templateUrl: './date-time.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, FsFormModule],
})
export class DateTimeComponent {

  public inputValue: string | boolean = false;

  constructor(public fsPrompt: FsPrompt) {}

  public openInput() {
    this.fsPrompt.dateTime({
      label: 'Please select a date/time',
      title: 'Date Time',
      commitLabel: 'Select',
      required: true,
      default: null,
    }).subscribe((value: string | boolean) => {
      if (value !== false) {
        this.inputValue = value;
      }
    }, () => {
      console.log('Cancelled');
    });
  }
}

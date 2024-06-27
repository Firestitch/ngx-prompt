import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FsPrompt } from '@firestitch/prompt';


@Component({
  selector: 'date-example',
  templateUrl: './date.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent {

  public inputValue: string | boolean = false;

  constructor(public fsPrompt: FsPrompt) {}

  public openInput() {
    this.fsPrompt.date({
      label: 'Please select a date',
      title: 'Date',
      commitLabel: 'Select',
      required: true,
      default: new Date(),
    }).subscribe((value: string | boolean) => {
      if (value !== false) {
        this.inputValue = value;
      }
    }, () => {
      console.log('Cancelled');
    });
  }
}

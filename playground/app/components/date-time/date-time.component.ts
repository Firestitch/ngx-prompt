import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

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
  fsPrompt = inject(FsPrompt);


  public inputValue: string | boolean = false;

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

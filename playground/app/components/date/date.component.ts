import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FsPrompt } from '@firestitch/prompt';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';


@Component({
    selector: 'date-example',
    templateUrl: './date.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, FsFormModule],
})
export class DateComponent {
  fsPrompt = inject(FsPrompt);


  public inputValue: string | boolean = false;

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

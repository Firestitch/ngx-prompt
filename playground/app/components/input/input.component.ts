import { Component } from '@angular/core';
import { FsPrompt } from '../../../../src';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'input-example',
  templateUrl: 'input.component.html'
})
export class InputComponent {

  public inputValue: string | boolean = false;

  constructor(public fsPrompt: FsPrompt) {}

  public openInput() {
    this.fsPrompt.input({
      hint: 'Use commas to separate multiple email addresses',
      label: 'Please an email adresses',
    }).subscribe((value: string | boolean) => {
      if (value !== false) {
        this.inputValue = value;
      }
    })
  }
}

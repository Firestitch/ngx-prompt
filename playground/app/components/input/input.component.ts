import { Component } from '@angular/core';
import { FsPrompt } from '@firestitch/prompt';


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
      title: 'Input Prompt',
      commitLabel: 'Create',
      required: true,
      default: 'Default Value',
    }).subscribe((value: string | boolean) => {
      if (value !== false) {
        this.inputValue = value;
      }
    })
  }
}

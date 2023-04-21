import { Component } from '@angular/core';
import { FsPrompt } from '@firestitch/prompt';


@Component({
  selector: 'confirm-example',
  templateUrl: 'confirm.component.html'
})
export class ConfirmComponent {

  public confirmValue = '';

  constructor(public fsPrompt: FsPrompt) {}


  public showConfirm() {
    this.fsPrompt.confirm({
      title: 'Confirm',
      template: 'Are you sure?<br><br>Are you really sure?',
      escape: true,
    }).subscribe(() => {
      this.confirmValue = 'Ok';
    }, (error: any) => {
      this.confirmValue = 'Cancel';
    });
  }

  public showConfirmButtons() {
    this.fsPrompt.confirm({
      title: 'Confirm',
      template: 'Are you sure?',
      buttons: [
        {
          label: 'Continue',
          color: 'primary',
          class: 'continue',
          value: 'Continue'
        },
        {
          label: 'Cancel',
          cancel: true,
          class: 'cancel'
        }
      ]
    }).subscribe((value) => {
      this.confirmValue = value;
    }, (error: any) => {
      this.confirmValue = 'Cancel';
    });

  }
}

import { Component } from '@angular/core';
import { FsPrompt } from './../../src';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public inputValue: string | boolean = false;
  public selectValue = false;
  public selectAutoValue = false;

  constructor(public fsPrompt: FsPrompt) {}

  /**
   * Confirm modal
   */
  public showConfirm() {
    this.fsPrompt.confirm({
      title: 'Confirm',
      template: 'Are you sure?'
    }).subscribe(() => {
      alert('Ok');
    }, (error: any) => {
      alert('Cancel');
    });

  }

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

  public openSelect() {
    let testObservable = new Subject<any>();

    // Array test case
    let simpleArray = [
      { name: 'Dave', value: 0 },
      { name: 'Mike', value: 1 }
    ];

    // Observable test case
    let testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simpleArray);
        // reject('error')
      }, 3000)
    });

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 3000);

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

  public openAutocomplete() {
    let testObservable = new Subject<any>();

    // Array test case
    let simpleArray = [
      { name: 'Dave', value: 0 },
      { name: 'Mike', value: 1 }
    ];

    // Observable test case
    let testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(simpleArray);
        // reject('error')
      }, 3000)
    });

    // Observable test case
    setTimeout(() => {
      testObservable.next(simpleArray);
      // testObservable.error('error')
    }, 3000);

    this.fsPrompt.autocomplete({
      label: 'Please select a user',
      hint: 'Hint: His name is Dave',
      values: () => {
        return testObservable;
      }
    }).subscribe((result: any) => {
      this.selectAutoValue = result;
    })
  }
}

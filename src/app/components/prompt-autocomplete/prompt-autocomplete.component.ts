import { ChangeDetectionStrategy, Component, Inject, OnDestroy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Observable, of, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { FsPromptAutocompleteConfig } from '../../classes';


@Component({
  selector: 'fs-prompt-autocomplete',
  templateUrl: './prompt-autocomplete.component.html',
  styleUrls: [
    '../../prompt.css',
    './prompt-autocomplete.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsPromptAutocompleteComponent implements OnDestroy {

  public inputControl = new UntypedFormControl('', []);
  public filteredItems: Observable<any[]>;
  public result;
  public loading = false;
  public items = [];
  public error = false;
  public model;

  private _destroy$ = new Subject();

  constructor(
    public dialogRef: MatDialogRef<FsPromptAutocompleteComponent>,
    @Inject(MAT_DIALOG_DATA) public config: FsPromptAutocompleteConfig<any>,
  ) {
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public fetch = (name: string) => {
    return this.config.values(name);
  };

  public select = () => {
    return of(true)
      .pipe(
        tap(() => {
          this.dialogRef.close(this.result.value);
        }),
      );
  };

  public change() {
    if (this.config.commitOnSelect) {
      this.select()
        .pipe(
          takeUntil(this._destroy$),
        )
        .subscribe();
    }
  }

  public displayWith(value) {
    return value ? value.name : undefined;
  }
}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FsDatePickerModule } from '@firestitch/datepicker';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';
import {
  FsPromptAutocompleteChipsModule,
  FsPromptAutocompleteModule,
  FsPromptConfirmModule,
  FsPromptDateModule,
  FsPromptInputModule,
  FsPromptSelectModule,
} from '@firestitch/prompt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import {
  AutocompleteChipsComponent,
  AutocompleteComponent,
  ConfirmComponent,
  DateComponent,
  DateTimeComponent,
  InputComponent,
  SelectComponent,
} from './components';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsPromptInputModule,
    FsPromptSelectModule,
    FsPromptDateModule,
    FsPromptAutocompleteModule,
    FsPromptConfirmModule,
    FsPromptAutocompleteChipsModule,
    FsDatePickerModule.forRoot(),
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    FsFormModule.forRoot(),
    RouterModule.forRoot([]),
    ToastrModule.forRoot({ preventDuplicates: true }),
  ],
  declarations: [
    AppComponent,
    SelectComponent,
    AutocompleteComponent,
    InputComponent,
    ConfirmComponent,
    DateComponent,
    DateTimeComponent,
    AutocompleteChipsComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'auto', appearance: 'outline' },
    },
  ],
})
export class PlaygroundModule {
}

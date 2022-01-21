import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  FsPromptInputModule,
  FsPromptSelectModule,
  FsPromptAutocompleteModule,
  FsPromptConfirmModule,
  FsPromptDateModule,
  FsPromptAutocompleteChipsModule,
} from '@firestitch/prompt';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsDatePickerModule } from '@firestitch/datepicker';

import { ToastrModule } from 'ngx-toastr';

import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import {
  AutocompleteComponent,
  ConfirmComponent,
  InputComponent,
  SelectComponent,
  DateComponent,
  DateTimeComponent,
  AutocompleteChipsComponent,
} from './components';


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
    ToastrModule.forRoot({ preventDuplicates: true }),
  ],
  entryComponents: [],
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
})
export class PlaygroundModule {
}

import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsPromptModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {  SelectComponent,
          AutocompleteComponent,
          InputComponent,
          ConfirmComponent } from './app/components';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsPromptModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot()
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    SelectComponent,
    AutocompleteComponent,
    InputComponent,
    ConfirmComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}

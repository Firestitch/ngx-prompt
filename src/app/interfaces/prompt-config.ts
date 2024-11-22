import { MatDialogConfig } from '@angular/material/dialog';

import { Observable } from 'rxjs';


export interface IFsPromptConfig {
  title?: string;
  template?: string;
  hint?: string;
  label?: string;
  class?: string | string[];
  commitLabel?: string;
  cancelLabel?: string;
  commitShow?: boolean;
  cancelShow?: boolean;
  dialogConfig?: MatDialogConfig;
  buttons?: IFsPromptButtonConfig[];
  autofocus?: boolean;
  default?: any;
  escape?: boolean | undefined;
}

export interface IFsPromptAutocompleteChipsConfig extends IFsPromptConfig {
  required?: boolean;
  allowText?: boolean;
  validateText?: (text?: string) => boolean;
  values?(keyword): Observable<{ name; value }[]>;
}

export interface IFsPromptAutocompleteConfig extends IFsPromptConfig {
  commitOnSelect?: boolean;
  required?: boolean;
  fetchOnFocus?: boolean;
  values?(keyword): Observable<{ name; value }[]>;
}

export interface IFsPromptSelectConfig extends IFsPromptConfig {
  commitOnSelect?: boolean;
  required?: boolean;
  values?(keyword): Observable<{ name; value }[]>;
}

export interface IFsPromptDeleteConfig extends IFsPromptConfig {
  objectType?: string;
}

export interface IFsPromptDateConfig extends IFsPromptConfig {
  required?: boolean;
}

export interface IFsPromptDateTimeConfig extends IFsPromptConfig {
  required?: boolean;
}

export interface IFsPromptInputConfig extends IFsPromptConfig {
  multiline?: boolean;
  suffix?: string;
  required?: boolean;
}

export interface IFsPromptButtonConfig {
  label?: string;
  class?: string;
  color?: string;
  cancel?: boolean;
  value?: any;
}

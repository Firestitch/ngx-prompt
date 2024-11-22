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
  values?(keyword): Observable<{ name; value }[]>;
  dialogConfig?: MatDialogConfig;
  buttons?: IFsPromptButtonConfig[];
  required?: boolean;
  autofocus?: boolean;
  default?: any;
  escape?: boolean | undefined;
}

export interface IFsPromptAutocompleteChipsConfig extends IFsPromptConfig {
  allowText?: boolean;
  validateText?: (text?: string) => boolean;
}

export interface IFsPromptAutocompleteConfig extends IFsPromptConfig {
  commitOnSelect?: boolean;
  fetchOnFocus?: boolean;
}

export interface IFsPromptSelectConfig extends IFsPromptConfig {
  commitOnSelect?: boolean;
}

export interface IFsPromptDeleteConfig extends IFsPromptConfig {
  objectType?: string;
}

export interface IFsPromptDateConfig extends IFsPromptConfig {
}

export interface IFsPromptDateTimeConfig extends IFsPromptConfig {

}

export interface IFsPromptInputConfig extends IFsPromptConfig {
  multiline?: boolean;
  suffix?: string;
}

export interface IFsPromptButtonConfig {
  label?: string;
  class?: string;
  color?: string;
  cancel?: boolean;
  value?: any;
}

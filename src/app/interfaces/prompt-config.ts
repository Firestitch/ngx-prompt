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
  escape?: boolean;
}

export interface IFsPromptAutocompleteChipsConfig extends IFsPromptConfig {
  allowText?: boolean;
  validateText?: (string?) => boolean;
}

export interface IFsPromptInputConfig extends IFsPromptConfig {
  multiline?: boolean;
}

export interface IFsPromptButtonConfig {
  label?: string;
  class?: string;
  color?: string;
  cancel?: boolean;
  value?: any;
}

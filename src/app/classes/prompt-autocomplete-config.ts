import { PromptType } from '../helpers/enums';
import { IFsPromptAutocompleteConfig } from '../interfaces';

import { FsPromptConfig } from './prompt-config';


export class FsPromptAutocompleteConfig<T> extends FsPromptConfig<T> {

  public commitOnSelect: boolean;
  public required: boolean;
  public fetchOnFocus: boolean;
  public values: (keyword: string) => any;

  constructor(config: IFsPromptAutocompleteConfig) {
    super(config, PromptType.autocomplete);
    
    this.required = config.required;
    this.commitOnSelect = config.commitOnSelect;
    this.fetchOnFocus = config.fetchOnFocus ?? true;
    this.values = config.values;
  }

}

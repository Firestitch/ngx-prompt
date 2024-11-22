
import { PromptType } from '../helpers/enums';
import { IFsPromptAutocompleteChipsConfig } from '../interfaces';

import { FsPromptConfig } from './prompt-config';

export class FsPromptAutocompleteChipsConfig<T> extends FsPromptConfig<T> {

  public allowText: boolean;
  public required: boolean;
  public values: (keyword: string) => any;
  public validateText: (text?: string) => boolean;

  constructor(config: IFsPromptAutocompleteChipsConfig) {
    super(config, PromptType.autocompleteChips);

    this.default = config.default ?? [];
    this.values = config.values;
    this.allowText = config.allowText ?? false;
    this.required = config.required ?? true;
    this.commitLabel = config.commitLabel ?? 'Select';
    this.validateText = config.validateText;
  }
}

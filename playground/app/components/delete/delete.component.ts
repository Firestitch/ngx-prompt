import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FsMessage } from '@firestitch/message';
import { FsPrompt } from '@firestitch/prompt';


@Component({
  selector: 'delete-example',
  templateUrl: './delete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteComponent {

  private _message = inject(FsMessage);
  private _prompt = inject(FsPrompt);

  public delete() {
    this._prompt
      .delete({
        objectType: 'file',
      })
      .subscribe(() => {
        this._message.success('Deleted');
      });
  }
}

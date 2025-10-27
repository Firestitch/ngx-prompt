import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FsMessage } from '@firestitch/message';
import { FsPrompt } from '@firestitch/prompt';
import { MatButton } from '@angular/material/button';
import { FsFormModule } from '@firestitch/form';


@Component({
    selector: 'delete-example',
    templateUrl: './delete.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButton, FsFormModule],
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

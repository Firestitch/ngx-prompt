import { ChangeDetectionStrategy, Component } from '@angular/core';

import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DeleteComponent } from './components/delete/delete.component';
import { SelectComponent } from './components/select/select.component';
import { InputComponent } from './components/input/input.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutocompleteChipsComponent } from './components/autocomplete-chips/autocomplete-chips.component';
import { DateComponent } from './components/date/date.component';
import { DateTimeComponent } from './components/date-time/date-time.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
        ConfirmComponent,
        DeleteComponent,
        SelectComponent,
        InputComponent,
        AutocompleteComponent,
        AutocompleteChipsComponent,
        DateComponent,
        DateTimeComponent,
    ],
})
export class AppComponent {
  public config = environment;
}

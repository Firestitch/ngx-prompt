import { Observable } from 'rxjs/Observable';

export interface FsValuesFunction {
  <T>(): Observable<T> | Promise<T> | T[]
}

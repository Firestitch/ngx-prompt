import { Observable } from 'rxjs';
import { ConverterType } from './enums';

export function valuesConverter(values: any) {

    if (typeof values === 'function') {
      values = values();
    }

    if (values instanceof Observable) { // check if it Observable
        return {
          type: ConverterType.observable,
          values: values
        }
    } else if (!!values && (typeof values === 'object' || typeof values === 'function')
               && typeof (values as Promise<any>).then === 'function') {
        return {
          type: ConverterType.promise,
          values: values
        }
    } else if (Array.isArray(values)) { // check if it Array
      return {
        type: ConverterType.array,
        values: values
      }
    }

    // if we can't detect type
    return {
      type: ConverterType.array,
      values: []
    }
  }

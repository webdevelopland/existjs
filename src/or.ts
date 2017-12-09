import { is } from './is';

// Choose first existing object
export function or(...list: Array<any>): any {
  for (let value of list) {
    if (is(value)) return value;
  }
  return null;
}

import { exist } from './exist';

// Choose first existing object
export function or(...list: any[]): any {
  for (let value of list) {
    if (exist(value)) {
      return value;
    }
  }
  return null;
}

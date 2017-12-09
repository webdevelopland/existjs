import { is } from './is';

// Not exist?
export function not(obj: any): boolean {
  return !is(obj);
}

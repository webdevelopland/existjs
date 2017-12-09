import { isNumber } from './check-types';

// Is object exist?
export function is(obj: any): boolean {
  if (obj === null || obj === undefined) return false;
  if (isNumber(obj) && isNaN(obj)) return false;
  else return true;
}

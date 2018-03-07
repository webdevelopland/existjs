import { isNumber } from './check-types';

// Does the object exist?
export function exist(obj: any): boolean {
  if (obj === undefined || obj === null || (isNumber(obj) && isNaN(obj))) {
    return false;
  } else {
    return true;
  }
}

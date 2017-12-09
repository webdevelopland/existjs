// Check type
export function isObject(objectToCheck: any): boolean {
  return Object.prototype.toString
    .call(objectToCheck) === '[object Object]';
}
export function isNumber(numberToCheck: number): boolean {
  return Object.prototype.toString
    .call(numberToCheck) === '[object Number]';
}
export function isString(stringToCheck: string): boolean {
  return Object.prototype.toString
    .call(stringToCheck) === '[object String]';
}
export function isArray(arrayToCheck: any[]): boolean {
  return Object.prototype.toString
    .call(arrayToCheck) === '[object Array]';
}
export function isFunction(functionToCheck: Function): boolean {
  return Object.prototype.toString
    .call(functionToCheck) === '[object Function]';
}
export function isBoolean(booleanToCheck: boolean): boolean {
  return Object.prototype.toString
    .call(booleanToCheck) === '[object Boolean]';
}

# existjs
## v2.0.0 ( last update: 7 mar 2018 )
Does the variable exist and what is its type? The easy way to know. Typescript included.

### Install
npm
```javascript
npm install existjs --save
```

Node.js
```javascript
const { exist, or, ... } = require('existjs');
```

Typescript
```javascript
import { exist, or, ... } from 'existjs';
```

Browser
```javascript
<script src='/node_modules/existjs/dist/existjs-min.js'></script>
<script>
  // How to use:
  // existjs.exist();
  // existjs.or();
  // ...
</script>
```

### exist()
Does the variable exist?
```javascript
exist(null); // false
exist(undefined); // false
exist(NaN); // false
exist(0); // true
exist(''); // true
exist([]); // true
exist({}); // true
exist(false); // true
exist('hello'); // true
```

### or()
It chooses first existing variable
```javascript
var c = or(null, null, undefined, 72, 12, null, 'hi'); // c = 72
var c = or(undefined, 0, 2); // c = 0
```

### Check types
```javascript
isObject({ age: 99 }); // true
isNumber(122); // true
isString('deal with it'); // true
isArray([ 1, 2, 3 ]); // true
isFunction(function() {}); // true
isBoolean(false); // true
```

# existjs
## v1.0.0 ( last update: 9 dec 2017 )
Is the variable exist and what is its type? The easy way to know. Typescript included.

### Install
npm
```javascript
npm install existjs --save
```

Node.js
```javascript
const existjs = require('existjs');
// or
const { is, not, ... } = require('existjs');
```

Typescript
```javascript
import * as existjs from 'existjs';
// or
import { is, not, ... } from 'existjs';
```

Browser
```javascript
<script src='/node_modules/existjs/dist/existjs-min.js'></script>
```

### is()
Is the variable exist?
```javascript
is(null); // false
is(undefined); // false
is(NaN); // false
is(0); // true
is(''); // true
is([]); // true
is({}); // true
is(false); // true
is('hello'); // true
```

### not()
Not exist?
```javascript
not(undefined); // true
// not(var) = !is(var)
```

### or()
It chooses first existing variable
```javascript
var c = or(null, null, undefined, 72, 12, null, 'hi'); // c = 72
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

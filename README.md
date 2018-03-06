

You export entities namespaced to the module. This                       example uses const, but would also work with let, var,                       class or function

```
// export declarations
export const a = 'a';
export const b = 'b', c = 'c';

// export lists
const d = 'd', e = 'e';
export { d, e };

// alias exports
const letterF = 'f';
export { letterF as f };

// even default is just an aliased export
export { a as default }; 

// note: we're exporting "a" twice and that's fine
// note: we have a default export and named exports and that's fine

```

exports

```
{"a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","default":"a"}
```

___

Default exports have their own shorthand. You can put any                      value after `export default` and it will be the default                      export. There can only be one default export.

```
export default 'default string';

```

exports

```
{"default":"default string"}
```

___

You can use `import` to evaluate a module without actually                      importing anything.

```
import './setGlobal';
```

imports

```
{"default":{}}
```

___

`import * as NAME` imports an entire module namespace object                      assigned to `NAME`.

```
import * as letters from './../exports/letters';
```

imports

```
{"letters":{"a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","default":"a"}}
```

___

You can import specific entities from a module and rename                      them as you please.

```
import { b, c as letterC, default as defaultLetter } from '../exports/letters';
```

imports

```
{"defaultLetter":"a","b":"b","letterC":"c"}
```

___

`import NAME` without curly braces imports the default                      export and assigns it to `NAME`.

```
import defaultLetter from '../exports/letters';
```

imports

```
{"defaultLetter":"a"}
```

___
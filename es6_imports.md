

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
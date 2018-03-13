

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
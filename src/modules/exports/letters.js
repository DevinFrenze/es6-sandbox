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

# can-delete-prop

Checks whether the [`delete` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) can be used on an object property.

## Installation

Requires [Node.js](https://nodejs.org/).

```bash
npm i can-delete-prop
```

## API

The module exports a single function.

### Parameters

1. `obj` (object)
2. `key` (string or symbol)

### Return Value

Returns `true` if the property exists and is configurable; otherwise `false`.

## Related

* [kdel](https://github.com/lamansky/kdel)
* [vdel](https://github.com/lamansky/vdel)

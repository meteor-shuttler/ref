# Ref

References between collections.

## Example

```js
var b = new Mongo.Collection('a');
b.insert({ _id: 'c' });
var c = b.findOne('c');
c.Ref(); // { id: 'c', collection: 'a' }
```

## Documentation

### document.Ref(prefix?: String) => { id: String, collection: String }
Helper added to all documents in all the collections.
Generates an object-reference to that document.

#### Arguments

##### prefix?: String
The optional arguments are appended prefix to the keys in result object-reference.

###### Example
```js
c.Ref('_prefix'); // { '_prefix.id': 'c', '_prefix.collection': 'a' }
```

### Shuttle.Ref(ref?: Object) => Document|undefined
Find and returns the document by reference, or `undefined`.

### Shuttle.Ref.soft(ref?: Object) => Document|undefined
Like `Shuttle.Ref`, but if `ref` is a document returns it back.

#### Arguments

##### ref: Object
It must be a valid reference, else returns `undefined`.

### Shuttle.isRef(ref?: Object) => Boolean
If `ref` is `object` with strings `id` and `collection`, then returns true.

### Shuttle.Ref.Schema: SimpleSchema
Ready scheme for use with packages [SimpleSchema](https://github.com/aldeed/meteor-simple-schema) and [Collection2](https://github.com/aldeed/meteor-collection2/).
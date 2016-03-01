# Ref

References between collections.

## Example

```
meteor add shuttler:ref
```

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

### Shuttle.Ref.new(ref?: Object|String, prefix?: String) => { id: String, collection?: String }
Generates an object-reference.

If arguments is wrong, thrown `Meteor.Error('unexpected reference')`.

##### ref?: Object|String
* If `ref` is `Document` then uses `ref.Ref(prefix)`.
* If `ref` is `Ref` then add `prefix` to the keys in `ref`.
* If `ref` is `String` then use `ref` as `id` field in `Ref` without `collection` field.

##### prefix?: String
The optional arguments are appended prefix to the keys in result object-reference.

#### Arguments

##### ref: Object
It must be a valid reference, else returns `undefined`.

### Shuttle.isRef(ref?: Object) => Boolean
If `ref` is `object` with string `id` and optional string `collection`, then returns true.

### Shuttle.Ref.Schema: SimpleSchema
Ready scheme for use with packages [SimpleSchema](https://github.com/aldeed/meteor-simple-schema) and [Collection2](https://github.com/aldeed/meteor-collection2/).

## Versions

### 0.0.1
* `Shuttle.Ref.new`
* `collection` field is optional
* Comments
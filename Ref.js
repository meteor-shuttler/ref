// (ref?: Object) => Document|undefined
Shuttle.Ref = function(ref) {
	return Shuttle.isRef(ref)?Mongo.Collection.get(ref.collection).findOne(ref.id):undefined;
};

// (ref?: Object) => Document|undefined
Shuttle.Ref.soft = function(ref) {
	var result = Shuttle.Ref(ref);
	return result?result:(typeof(ref) == 'object' && '_id' in ref?ref:undefined);
}

// (ref?: Object|String, prefix?: String) => { id: String, collection?: String }
Shuttle.Ref.new = function(ref, prefix) {
	var _prefix = (prefix?prefix+'.':'');
	if (typeof(ref) == 'object') {
		if (typeof(ref.id) == 'string') {
			var result = {};
			result[_prefix+'id'] = ref.id;
			if (typeof(ref.collection) == 'string') result[_prefix+'collection'] = ref.collection;
			return result;
		} else if ('_id' in ref) return ref.Ref(prefix);
	} else if (typeof(ref) == 'string') return { [_prefix+'id']: ref };
	throw new Meteor.Error('unexpected reference');
};
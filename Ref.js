// (ref?: Object) => Document|undefined
Shuttler.Ref = function(ref) {
	return Shuttler.isRef(ref)?Shuttler.collection(ref.collection).findOne(ref.id):undefined;
};

// (ref?: Object) => Document|undefined
Shuttler.Ref.soft = function(ref) {
	var result = Shuttler.Ref(ref);
	return result?result:(typeof(ref) == 'object' && '_id' in ref?ref:undefined);
}

// (ref?: Object|String, prefix?: String) => { id: String, collection?: String }
Shuttler.Ref.new = function(ref, prefix) {
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
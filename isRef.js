Shuttle.isRef = function(ref) {
	return typeof(ref) == 'object' && typeof(ref.id) == 'string' && (!('collection' in ref) || typeof(ref.collection) == 'string');
};
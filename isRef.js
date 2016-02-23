Shuttle.isRef = function(ref) {
	return typeof(ref) == 'object' && typeof(ref.id) == 'string' && typeof(ref.collection) == 'string';
};
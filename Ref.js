Shuttle.Ref = function(ref) {
	return Shuttle.isRef(ref)?Mongo.Collection.get(ref.collection).findOne(ref.id):undefined;
};
Shuttle.Ref.soft = function(ref) {
	var result = Shuttle.Ref(ref);
	return result?result:(typeof(ref) == 'object' && typeof(ref._id) == 'string'?ref:undefined);
}
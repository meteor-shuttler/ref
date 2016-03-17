namedInstances = {};
nullInstances = [];

CollectionExtensions.addExtension(function(name, options) {
	if (options && typeof(options.ref) == 'string') var name = options.ref;
	this._ref = name;
	if (name) {
		if (!(name in namedInstances)) namedInstances[name] = [];
		namedInstances[name].push({
			name: name,
			instance: this
		});
	}
	else {
		nullInstances.push({
			instance: this
		});
	}
});
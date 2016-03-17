CollectionExtensions.addExtension(function(name, options) {
	var Collection = this;
	Collection.helpers({
		Ref: function(prefix) {
			var _prefix = (prefix?prefix+'.':'')
			return {
				[_prefix+'id']: this._id,
				[_prefix+'collection']: Collection._ref
			};
		}
	});
});
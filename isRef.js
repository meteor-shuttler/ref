Shuttler.isRef = function (ref) {
	const validationContext = Shuttler.Ref.Schema.newContext()
	validationContext.validate(ref)
	return validationContext.isValid()
};
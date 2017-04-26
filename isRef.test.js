import {Tinytest} from 'meteor/tinytest'

Tinytest.add('shuttler:ref - Shutter.isRef - accepts string IDs', test => {
	test.isTrue(Shuttler.isRef({id: 'asdf'}))
})

Tinytest.add('shuttler:ref - Shutter.isRef - accepts Mongo.ObjectID IDs', test => {
	test.isTrue(Shuttler.isRef({
		id: new Mongo.ObjectID()
	}))
})

Tinytest.add('shuttler:ref - Shutter.isRef - accepts an optional collection name', test => {
	test.isTrue(Shuttler.isRef({id: 'asdf', collection: 'foo'}))
	test.isTrue(Shuttler.isRef({
		id: new Mongo.ObjectID(),
		collection: 'bar'
	}))
})
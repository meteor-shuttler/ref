import SimpleSchema from 'simpl-schema'
import {Mongo} from 'meteor/mongo'

Shuttler.Ref.Schema = new SimpleSchema({
	collection: {
		type: String,
		optional: true
	},
	id: SimpleSchema.oneOf(String, {
		type: Mongo.ObjectID,
		blackbox: true
	})
});
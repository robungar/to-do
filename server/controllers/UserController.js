var turbo = require('turbo360')

module.exports = {
	find: function(params){
		// uncomment to request users from Turbo API.
		// this returns a promise:

		// return turbo({site_id: <APP_ID>}).fetch('user', params)
	},

	findById: function(id){
		// return turbo({site_id: <APP_ID>}).fetchOne('user', <USER_ID>)
	},

	create: function(params){
		// return turbo({site_id: <APP_ID>}).create('user', params)
	},

	put: function(original, params){
		// return turbo({site_id: <APP_ID>}).update('user', original, params)
	},

	delete: function(user){
		// return turbo({site_id: <APP_ID>}).remove('user', user)

	}

}




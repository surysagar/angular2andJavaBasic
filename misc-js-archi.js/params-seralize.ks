/**
	 * @function serializeParams
	 * @description naive implementation of $.param. Takes an object with keys and values
	 *   of type String and returns the URI-encoded representation of the key/value pairs.
	 * @param {Object} params the key/value pairs to be serialized
	 * @param {String} params['anyKey']
	 * @returns {String}
	 * @example serializeParams({key1: 'value1', key2: 'value2'}) // 'key1=value1&key2=value2'
	 */
	function serializeParams(params) {
		var parts = [];
		for (var key in params) {
			if (params[key] !== null && params[key] !== undefined) {
				parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
			}
		}
		return parts.join('&');
	}
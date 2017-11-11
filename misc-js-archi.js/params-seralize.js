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


	// Little jquery plugin to convert param into Object
	// https://css-tricks.com/snippets/jquery/get-query-params-object/
	// getQueryParameters('sdsdf?key1=value1&key2=value2') //  ({key1: 'value1', key2: 'value2'}) // 
	function getQueryParameters(str) {
		return (str || document.location.search)
			.replace(/(^\?)/, '')
			.split('&')
		// TODO: fix this, we should not get this fancy
		/* eslint-disable id-length, no-sequences, no-param-reassign */
			.map(function(n) {
				return n = n.split('='),
				this[n[0]] = n[1],
				this;
			}.bind({}))[0];
	}
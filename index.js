
/**
 * Get object value
 * @param {{}} object - the source object
 * @param {string} key - the case-insensitive property name
 * @return {*}
 */
function get(object, key) {
	if (!key) {
		throw new Error('key can\'t be empty');
	}

	const keys = Object.keys(object);
	const keyup = (String(key)).toUpperCase();
	for (let i = 0; i < keys.length; i++) {
		const el = keys[i];
		if (el.length === key.length && el.toUpperCase() === keyup) {
			return object[el];
		}
	}
}

/**
 * Get object value
 * @param {{}} object - the source object
 * @param {string} key - the case-insensitive property name
 * @param {*} value - value to be set (undefined === delete)
 * @param {boolean} [keepGoing] - don't quit after first match found
 * @param {boolean} [keepOriginalCasing] - preserve original casing (keepGoing should off too)
 * @return {Object} the source object
 */
function set(object, key, value, options) {
	if (!key) {
		throw new Error('key can\'t be empty');
	}

	const keys = Object.keys(object);
	const keyup = (String(key)).toUpperCase();
	const keepOriginalCasing = options && options.keepOriginalCasing;
	const keepGoing = options && options.keepGoing;

	for (let i = 0; i < keys.length; i++) {
		const el = keys[i];
		if (el.length === key.length && el.toUpperCase() === keyup) {
			if (keepOriginalCasing || el === key) {
				object[el] = value;
			} else {
				delete object[el];
				object[key] = value;
			}
			if (!keepGoing) {
				return object;
			}
		}
	}

	if (!keepGoing) {
		// Looks like nothing matching at all
		object[key] = value;
	}

	return object;
}

/**
 * Set multiple values to target by source object
 * @param {{}} target - the mutable object to be modified or filled with
 * @param {{}} source - an object source
 * @returns {{}} the same modified target (for piping)
 */
function assign(target, source) {
	Object.keys(source).forEach(v => set(target, v, source[v]));
	return target;
}

/**
 * Remove a property with
 * @param {{}} object - the mutable object to be modified or filled with
 * @param {string} key - the case-insensitive property name
 * @returns {{}} the same object
 */
function remove(object, key) {
	if (!key) {
		throw new Error('key can\'t be empty');
	}

	const keys = Object.keys(object);
	const keyup = String(key).toUpperCase();
	for (let i = 0; i < keys.length; i++) {
		const el = keys[i];
		if (el.length === keyup.length && el.toUpperCase() === keyup) {
			delete object[el];
		}
	}

	return object;
}

module.exports = { get, set, assign, remove };

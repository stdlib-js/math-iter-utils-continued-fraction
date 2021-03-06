/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isFinite = require( '@stdlib/assert-is-finite' ).isPrimitive; // eslint-disable-line stdlib/no-redeclare
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.iter] - maximum number of iterations
* @param {PositiveNumber} [options.tol] - tolerance at which to terminate further evaluation of the continued fraction
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'iter': 50
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'iter' ) ) {
		opts.iter = options.iter;
		if ( !isNonNegativeInteger( options.iter ) ) {
			return new TypeError( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', 'iter', options.iter );
		}
	}
	if ( hasOwnProp( options, 'tol' ) ) {
		opts.tol = options.tol;
		if ( !isFinite( options.tol ) || options.tol <= 0.0 ) {
			return new TypeError( format( 'invalid option. `%s` option must be a positive finite number. Option: `%s`.', 'tol', options.tol ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

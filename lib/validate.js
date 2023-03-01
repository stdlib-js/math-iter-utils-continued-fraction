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
var format = require( '@stdlib/error-tools-fmtprodmsg' );


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
		return new TypeError( format( '0Jz2h', options ) );
	}
	if ( hasOwnProp( options, 'iter' ) ) {
		opts.iter = options.iter;
		if ( !isNonNegativeInteger( options.iter ) ) {
			return new TypeError( format( '0Jz35' ), 'iter', options.iter );
		}
	}
	if ( hasOwnProp( options, 'tol' ) ) {
		opts.tol = options.tol;
		if ( !isFinite( options.tol ) || options.tol <= 0.0 ) {
			return new TypeError( format( '0Jz4e', 'tol', options.tol ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
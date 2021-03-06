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

var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var format = require( '@stdlib/string-format' );
var validate = require( './validate.js' );


// VARIABLES //

var TINY = 1.0e-50;


// MAIN //

/**
* Evaluates the terms of a continued fraction.
*
* @param {Iterator} iterator - input iterator
* @param {Options} [options] - options
* @param {NonNegativeInteger} [options.iter=1e308] - maximum number of iterations
* @param {PositiveNumber} [options.tol] - tolerance at which to terminate further evaluation of the continued fraction
* @throws {TypeError} must provide an iterator
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide validate options
* @returns {(number|null)} result
*
* @example
* var iterContinuedFractionSeq = require( '@stdlib/math-iter-sequences-continued-fraction' );
*
* // Create an iterator for generating continued fraction terms:
* var it = iterContinuedFractionSeq( 3.245 );
*
* // Reconstruct the original value from the terms:
* var v = iterContinuedFraction( it );
* // returns ~3.245
*/
function iterContinuedFraction( iterator ) {
	var delta;
	var opts;
	var err;
	var b0;
	var o;
	var C;
	var D;
	var f;
	var b;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an iterator. Value: `%s`.', iterator ) );
	}
	opts = {
		'iter': 1e308,
		'tol': EPS
	};
	if ( arguments.length > 1 ) {
		err = validate( opts, arguments[ 1 ] );
		if ( err ) {
			throw err;
		}
	}
	// Get the first iterated value...
	o = iterator.next();
	if ( o.done ) {
		return null;
	}
	b0 = o.value;
	if ( !isNumber( b0 ) || isnan( b0 ) ) {
		return b0;
	}
	// Initialize parameters of the modified Lentz's algorithm...
	f = b0;
	if ( f === 0.0 ) {
		f = TINY;
	}
	C = f;
	D = 0.0;

	// Evaluate the terms of the continued fraction...
	i = 1;
	while ( i < opts.iter ) {
		// Get the next iterated value...
		o = iterator.next();
		if ( o.done ) {
			break;
		}
		i += 1;

		b = o.value;
		if ( !isNumber( b ) || isnan( b ) ) {
			f = NaN;
			break;
		}
		// Use the modified Lentz's algorithm to find the next convergent...
		D += b;            // b_i + a_i*D_{i-1}, where a_i = 1.0 for all i
		if ( D === 0.0 ) {
			D = TINY;
		}
		C = b + ( 1.0/C ); // b_i + a_i/C_{i-1}, where a_i = 1.0 for all i
		if ( C === 0.0 ) {
			C = TINY;
		}
		D = 1.0 / D;
		delta = C * D;
		f *= delta;

		// Check whether we can terminate computation...
		if ( abs( delta - 1.0 ) <= opts.tol ) {
			break;
		}
	}
	if ( i <= 1 ) {
		return b0;
	}
	return f;
}


// EXPORTS //

module.exports = iterContinuedFraction;

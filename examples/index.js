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

var iterContinuedFractionSeq = require( '@stdlib/math-iter-sequences-continued-fraction' );
var PI = require( '@stdlib/constants-float64-pi' );
var iterContinuedFraction = require( './../lib' );

// Create an iterator for returning the list of continued fraction terms:
var it = iterContinuedFractionSeq( PI );

// Reconstitute the original value:
var v = iterContinuedFraction( it );
// returns <number>

console.log( 'Value: %d.', v );

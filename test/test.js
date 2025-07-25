/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var tape = require( 'tape' );
var ones = require( '@stdlib/array-ones' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var everyBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof everyBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an empty input ndarray', function test( t ) {
	var actual;
	var x;

	x = ndarray( 'float64', ones( 8, 'float64' ), [ 0 ], [ 1 ], 0, 'row-major' );

	actual = everyBy( [ x ], clbk );
	t.strictEqual( actual, true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v !== 0.0;
	}
});

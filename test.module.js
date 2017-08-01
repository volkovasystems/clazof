"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "clazof",
			"path": "clazof/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/clazof.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"clazof": "clazof"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const clazof = require( "./clazof.js" );
//: @end-server

//: @client:
const clazof = require( "./clazof.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @bridge:

describe( "clazof", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`clazof( new Date( ), Date )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( new Date( ), Date );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( Array, Array )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( Array, Array );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( Array, 'Array' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( Array, "Array" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( true, Boolean )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( true, Boolean );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( 123, Number )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( 123, Number );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( 'yeah', String )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( "yeah", String );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( [ ], Array )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( [ ], Array );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( [ ], Object )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( [ ], Object );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( { }, Object )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( { }, Object );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( function constructor( ){ }, 'constructor' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(
				function( ){
					return clazof( function constructor( ){ }, "constructor" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( function Hello( ){ }, function Hello( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( function Hello( ){ }, function Hello( ){ } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( /eah/, RegExp )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( /eah/, RegExp );
				}

			).value;

			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( apple, 'Orange' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class Orange {
						constructor( ){
							this.color = "orange";
						}
						getColor( ){
							return "orange";
						}
					}

					class Apple extends Orange {
						constructor( ){
							super( );

							this.color = "red";
						}
						getColor( ){
							return this.color;
						}
					}

					let apple = new Apple( );

					return clazof( apple, "Orange" );

				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`clazof( function Hello( ){ }, function Hi( ){ } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( function Hello( ){ }, function Hi( ){ } );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`clazof( ( ) => { }, ( ) => { } )`", ( ) => {
		it( "should be equal to false", ( ) => {

			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return clazof( ( ) => { }, ( ) => { } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

	/* @fixme
		The entity is null leading to "Cannot read property 'constructor' of null"

	assert.equal( clazof( null, Error ), false, "should be equal to false" );
	assert.equal( clazof( null, OBJECT ), true, "should be equal to true" );

	*/

} );

//: @end-bridge

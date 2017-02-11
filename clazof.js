"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "clazof",
			"path": "clazof/clazof.js",
			"file": "clazof.js",
			"module": "clazof",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/clazof.git",
			"test": "clazof-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Functional instanceof.

		This will walk the inheritance tree.
	@end-module-documentation

	@include:
		{
			"budge": "budge",
			"een": "een",
			"falzy": "falzy",
			"protype": "protype"
		}
	@end-include
*/

const budge = require( "budge" );
const een = require( "een" );
const falzy = require( "falzy" );
const protype = require( "protype" );

const clazof = function clazof( entity, blueprint ){
	/*;
		@meta-configuration:
			{
				"entity:required": "object",
				"blueprint:required": "function"
			}
		@end-meta-configuration
	*/

	if( arguments.length > 2 ){
		blueprint = budge( arguments )
			.filter( ( blueprint ) => { return protype( blueprint, FUNCTION ); } );

		return blueprint.some( ( blueprint ) => { return clazof( entity, blueprint ); } );
	}

	if( !protype( blueprint, FUNCTION ) ){
		throw new Error( "invalid blueprint" );
	}

	if( falzy( entity ) || !protype( entity, OBJECT + FUNCTION ) ){
		return false;
	}

	if( protype( entity, OBJECT ) ){
		let result = entity instanceof blueprint;

		/*;
			@todo:
				If we can separate this to another module that just walk the inheritance tree.
			@end-todo
		*/
		if( !result ){
			let constructor = [ ];
			let point = entity;
			while( een( constructor, point.constructor ) ){
				constructor.push( point.constructor );
				point = point.constructor.prototype;
			}

			result = constructor.some( ( constructor ) => {
				return clazof( constructor, blueprint );
			} );
		}

		if( !result ){
			let constructor = [ ];
			let point = entity.constructor;
			while( een( constructor, point.__proto__ ) ){
				constructor.push( point.__proto__ );
				point = point.__proto__;
			}

			result = constructor.some( ( constructor ) => {
				return clazof( constructor, blueprint );
			} );
		}

		return result;
	}

	if( protype( entity, FUNCTION ) ){
		return ( entity.name === blueprint.name &&
				entity.toString( ) === blueprint.toString( ) ) ||
			clazof( entity.prototype, blueprint );
	}
};

module.exports = clazof;

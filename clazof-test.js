"use strict";

const clazof = require( "./clazof.js" );

console.log( clazof( new Date( ), Date ) );

console.log( clazof( Array, Array ) );

console.log( clazof( Array, Object ) );

console.log( clazof( RangeError, Array ) );

console.log( clazof( RangeError, "Error" ) );

console.log( clazof( RangeError, "RangeError" ) );

console.log( clazof( RangeError, "Array" ) );

console.log( clazof( Array, "Array" ) );

console.log( clazof( RangeError, Error, Array ) );

console.log( "boolean", clazof( true, Boolean ) );

console.log( "number", clazof( 123, Number ) );

console.log( "string", clazof( "yeah", String ) );

console.log( clazof( function Hello( ){ }, function Hello( ){ } ) );

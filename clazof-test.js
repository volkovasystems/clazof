"use strict";

const assert = require( "assert" );
const clazof = require( "./clazof.js" );

assert.equal( clazof( new Date( ), Date ), true, "should be true" );

assert.equal( clazof( Array, Array ), true, "should be true" );

assert.equal( clazof( Array, Object ), true, "should be true" );

console.log( clazof( RangeError, Array ) );

//console.log( clazof( RangeError, "Error" ) );

//console.log( clazof( RangeError, "RangeError" ) );

//console.log( clazof( RangeError, "Array" ) );

assert.equal( clazof( Array, "Array" ), true, "should be true" );

//console.log( clazof( RangeError, Error, Array ) );

assert.equal( clazof( true, Boolean ), true, "should be true" );

assert.equal( clazof( 123, Number ), true, "should be true" );

assert.equal( clazof( "yeah", String ), true, "should be true" );

assert.equal( clazof( function Hello( ){ }, function Hello( ){ } ), true, "should be true" );

console.log( "ok" );

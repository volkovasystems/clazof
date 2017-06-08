
const assert = require( "assert" );
const clazof = require( "./clazof.js" );

assert.equal( clazof( new Date( ), Date ), true, "should be true" );

assert.equal( clazof( Array, Array ), true, "should be true" );

assert.equal( clazof( Array, Object ), true, "should be true" );

assert.equal( clazof( Date, Object ), true, "should be true" );

assert.equal( clazof( RegExp, Object ), true, "should be true" );

assert.equal( clazof( Array, Function ), true, "should be true" );

assert.equal( clazof( Date, Function ), true, "should be true" );

assert.equal( clazof( RegExp, Function ), true, "should be true" );

assert.equal( clazof( Array, "Array" ), true, "should be true" );

assert.equal( clazof( true, Boolean ), true, "should be true" );

assert.equal( clazof( 123, Number ), true, "should be true" );

assert.equal( clazof( "yeah", String ), true, "should be true" );

assert.equal( clazof( 123 + "a", String ), true, "should be true" );

assert.equal( clazof( [ ], Array ), true, "should be true" );

assert.equal( clazof( { }, Object ), true, "should be true" );

assert.equal( clazof( [ ], Object ), true, "should be true" );

assert.equal( clazof( function Hello( ){ }, function Hello( ){ } ), true, "should be true" );

assert.equal( clazof( function Hello( ){ }, function Hi( ){ } ), false, "should return false" );

assert.equal( clazof( 123 + "a", Number ), false, "should return false" );

console.log( "ok" );

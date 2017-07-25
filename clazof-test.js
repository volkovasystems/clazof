
const assert = require( "assert" );
const clazof = require( "./clazof.js" );

assert.equal( clazof( new Date( ), Date ), true, "should return true" );

assert.equal( clazof( Array, Array ), true, "should return true" );

assert.equal( clazof( Array, "Array" ), true, "should return true" );

assert.equal( clazof( true, Boolean ), true, "should return true" );

assert.equal( clazof( 123, Number ), true, "should return true" );

assert.equal( clazof( "yeah", String ), true, "should return true" );

assert.equal( clazof( [ ], Array ), true, "should return true" );

assert.equal( clazof( [ ], Object ), true, "should return true" );

assert.equal( clazof( { }, Object ), true, "should return true" );

assert.equal( clazof( null, Object ), true, "should return true" );

assert.equal( clazof( function constructor( ){ }, "constructor" ), true, "should return true" );

assert.equal( clazof( function Hello( ){ }, function Hello( ){ } ), true, "should return true" );

assert.equal( clazof( /eah/, RegExp ), true, "should return true" );

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

assert.equal( clazof( apple, "Orange" ), true, "should return true" );

assert.equal( clazof( null, Error ), false, "should return false" );

assert.equal( clazof( function Hello( ){ }, function Hi( ){ } ), false, "should return false" );

assert.equal( clazof( ( ) => { }, ( ) => { } ), false, "should return false" );

console.log( "ok" );

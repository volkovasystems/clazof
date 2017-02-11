"use strict";

const clazof = require( "./clazof.js" );

console.log( clazof( new Date( ), Date ) );

console.log( clazof( Array, Array ) );

console.log( clazof( Array, Object ) );

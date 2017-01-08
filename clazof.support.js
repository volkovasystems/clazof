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
			"een": "een",
			"protype": "protype"
		}
	@end-include
*/

var een = require("een");
var protype = require("protype");

//; @support-module:
//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.some = Array.prototype.some || function (evaluator, thisArg) {
	"use strict";

	if (!this) throw new TypeError("Array.prototype.some called on null or undefined");
	if ("function" != typeof evaluator) {
		if ("string" != typeof evaluator) throw new TypeError();
		if (!(evaluator = eval(evaluator))) throw new TypeError();
	}var i;
	if (void 0 === thisArg) {
		for (i in this) {
			if (evaluator(this[i], i, this)) return !0;
		}return !1;
	}
	for (i in this) {
		if (evaluator.call(thisArg, this[i], i, this)) return !0;
	}return !1;
};
//; @end-support-module

var clazof = function clazof(entity, blueprint) {
	/*;
 	@meta-configuration:
 		{
 			"entity:required": "*",
 			"blueprint:required": "function"
 		}
 	@end-meta-configuration
 */

	if (!protype(blueprint, FUNCTION)) {
		throw new Error("invalid blueprint");
	}

	if (protype(entity, OBJECT)) {
		var result = entity instanceof blueprint;

		/*;
  	@todo:
  		If we can separate this to another module that just walk the inheritance tree.
  	@end-todo
  */
		if (!result) {
			var _constructor = [];
			var point = entity;
			while (een(_constructor, point.constructor)) {
				_constructor.push(point.constructor);
				point = point.constructor.prototype;
			}

			result = _constructor.some(function onEachConstructor(constructor) {
				return clazof(constructor, blueprint);
			});
		}

		if (!result) {
			var _constructor2 = [];
			var _point = entity.constructor;
			while (een(_constructor2, _point.__proto__)) {
				_constructor2.push(_point.__proto__);
				_point = _point.__proto__;
			}

			result = _constructor2.some(function onEachConstructor(constructor) {
				return clazof(constructor, blueprint);
			});
		}

		return result;
	} else if (protype(entity, FUNCTION)) {
		entity.name === blueprint.name && entity.toString() === blueprint.toString();
	}
};

module.exports = clazof;

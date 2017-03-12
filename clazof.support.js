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
              
              		Multiple blueprint is strictly evaluated, so if one of them is falsy
              			then this will return false.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"portel": "portel",
              			"protype": "protype",
              			"raze": "raze",
              			"stringe": "stringe",
              			'wauker': "wauker"
              		}
              	@end-include
              */

var falzy = require("falzy");
var portel = require("portel");
var protype = require("protype");
var raze = require("raze");
var stringe = require("stringe");
var wauker = require("wauker");

var clazof = function clazof(entity, blueprint) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"entity:required": [
                                                 				"object",
                                                 				"function"
                                                 			],
                                                 			"blueprint:required": [
                                                 				"function",
                                                 				"string",
                                                 				"..."
                                                 			]
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (arguments.length > 2) {
		blueprint = raze(arguments).splice(1).
		filter(function (blueprint) {return protype(blueprint, FUNCTION + STRING);});

		return blueprint.every(function (blueprint) {return clazof(entity, blueprint);});
	}

	if (!protype(blueprint, FUNCTION + STRING)) {
		throw new Error("invalid blueprint");
	}

	if (falzy(entity) || !protype(entity, OBJECT + FUNCTION)) {
		entity = portel(entity);
	}

	if (protype(blueprint, STRING)) {
		return wauker(entity).some(function (constructor) {
			return constructor.name === blueprint;
		});
	}

	if (protype(entity, OBJECT)) {
		return entity instanceof blueprint ||
		wauker(entity).some(function (constructor) {
			return clazof(constructor, blueprint);
		}) ||
		clazof(entity, blueprint.name);
	}

	if (protype(entity, FUNCTION)) {
		return entity.name === blueprint.name && stringe(entity) === stringe(blueprint) ||
		clazof(entity.prototype, blueprint) ||
		clazof(entity.prototype, blueprint.name);
	}

	return false;
};

module.exports = clazof;

//# sourceMappingURL=clazof.support.js.map
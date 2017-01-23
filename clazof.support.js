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

var budge = require("budge");
var een = require("een");
var falzy = require("falzy");
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
 			"entity:required": "object",
 			"blueprint:required": "function"
 		}
 	@end-meta-configuration
 */

	if (arguments.length > 2) {
		blueprint = budge(arguments).filter(function (blueprint) {
			return protype(blueprint, FUNCTION);
		});

		return blueprint.some(function (blueprint) {
			return clazof(entity, blueprint);
		});
	}

	if (!protype(blueprint, FUNCTION)) {
		throw new Error("invalid blueprint");
	}

	if (falzy(entity)) {
		return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXpvZi5qcyJdLCJuYW1lcyI6WyJidWRnZSIsInJlcXVpcmUiLCJlZW4iLCJmYWx6eSIsInByb3R5cGUiLCJBcnJheSIsInByb3RvdHlwZSIsInNvbWUiLCJldmFsdWF0b3IiLCJ0aGlzQXJnIiwiVHlwZUVycm9yIiwiZXZhbCIsImkiLCJjYWxsIiwiY2xhem9mIiwiZW50aXR5IiwiYmx1ZXByaW50IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlsdGVyIiwiRlVOQ1RJT04iLCJFcnJvciIsIk9CSkVDVCIsInJlc3VsdCIsImNvbnN0cnVjdG9yIiwicG9pbnQiLCJwdXNoIiwib25FYWNoQ29uc3RydWN0b3IiLCJfX3Byb3RvX18iLCJuYW1lIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjs7QUFFQTtBQUNDO0FBQ0FJLE1BQU1DLFNBQU4sQ0FBZ0JDLElBQWhCLEdBQXFCRixNQUFNQyxTQUFOLENBQWdCQyxJQUFoQixJQUFzQixVQUFTQyxTQUFULEVBQW1CQyxPQUFuQixFQUEyQjtBQUFDOztBQUN2RSxLQUFHLENBQUMsSUFBSixFQUFTLE1BQU0sSUFBSUMsU0FBSixDQUFjLGtEQUFkLENBQU47QUFDVCxLQUFHLGNBQVksT0FBT0YsU0FBdEIsRUFBZ0M7QUFBQyxNQUFHLFlBQVUsT0FBT0EsU0FBcEIsRUFBOEIsTUFBTSxJQUFJRSxTQUFKLEVBQU47QUFDL0QsTUFBRyxFQUFFRixZQUFVRyxLQUFLSCxTQUFMLENBQVosQ0FBSCxFQUFnQyxNQUFNLElBQUlFLFNBQUos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aUJsQixNQUFqQiIsImZpbGUiOiJjbGF6b2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiY2xhem9mL2NsYXpvZi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2xhem9mLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NsYXpvZi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImNsYXpvZi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEZ1bmN0aW9uYWwgaW5zdGFuY2VvZi5cblxuXHRcdFRoaXMgd2lsbCB3YWxrIHRoZSBpbmhlcml0YW5jZSB0cmVlLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuLy87IEBzdXBwb3J0LW1vZHVsZTpcblx0Ly86IEByZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvbWVcblx0QXJyYXkucHJvdG90eXBlLnNvbWU9QXJyYXkucHJvdG90eXBlLnNvbWV8fGZ1bmN0aW9uKGV2YWx1YXRvcix0aGlzQXJnKXtcInVzZSBzdHJpY3RcIjtcblx0aWYoIXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5zb21lIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZXZhbHVhdG9yKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZXZhbHVhdG9yKXRocm93IG5ldyBUeXBlRXJyb3I7XG5cdGlmKCEoZXZhbHVhdG9yPWV2YWwoZXZhbHVhdG9yKSkpdGhyb3cgbmV3IFR5cGVFcnJvcn12YXIgaTtcblx0aWYodm9pZCAwPT09dGhpc0FyZyl7Zm9yKGkgaW4gdGhpcylpZihldmFsdWF0b3IodGhpc1tpXSxpLHRoaXMpKXJldHVybiEwO3JldHVybiExfVxuXHRmb3IoaSBpbiB0aGlzKWlmKGV2YWx1YXRvci5jYWxsKHRoaXNBcmcsdGhpc1tpXSxpLHRoaXMpKXJldHVybiEwO3JldHVybiExfTtcbi8vOyBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbmNvbnN0IGNsYXpvZiA9IGZ1bmN0aW9uIGNsYXpvZiggZW50aXR5LCBibHVlcHJpbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCJvYmplY3RcIixcblx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA+IDIgKXtcblx0XHRibHVlcHJpbnQgPSBidWRnZSggYXJndW1lbnRzIClcblx0XHRcdC5maWx0ZXIoICggYmx1ZXByaW50ICkgPT4geyByZXR1cm4gcHJvdHlwZSggYmx1ZXByaW50LCBGVU5DVElPTiApOyB9ICk7XG5cblx0XHRyZXR1cm4gYmx1ZXByaW50LnNvbWUoICggYmx1ZXByaW50ICkgPT4geyByZXR1cm4gY2xhem9mKCBlbnRpdHksIGJsdWVwcmludCApOyB9ICk7XG5cdH1cblxuXHRpZiggIXByb3R5cGUoIGJsdWVwcmludCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XG5cdH1cblxuXHRpZiggZmFsenkoIGVudGl0eSApICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYoIHByb3R5cGUoIGVudGl0eSwgT0JKRUNUICkgKXtcblx0XHRsZXQgcmVzdWx0ID0gZW50aXR5IGluc3RhbmNlb2YgYmx1ZXByaW50O1xuXG5cdFx0Lyo7XG5cdFx0XHRAdG9kbzpcblx0XHRcdFx0SWYgd2UgY2FuIHNlcGFyYXRlIHRoaXMgdG8gYW5vdGhlciBtb2R1bGUgdGhhdCBqdXN0IHdhbGsgdGhlIGluaGVyaXRhbmNlIHRyZWUuXG5cdFx0XHRAZW5kLXRvZG9cblx0XHQqL1xuXHRcdGlmKCAhcmVzdWx0ICl7XG5cdFx0XHRsZXQgY29uc3RydWN0b3IgPSBbIF07XG5cdFx0XHRsZXQgcG9pbnQgPSBlbnRpdHk7XG5cdFx0XHR3aGlsZSggZWVuKCBjb25zdHJ1Y3RvciwgcG9pbnQuY29uc3RydWN0b3IgKSApe1xuXHRcdFx0XHRjb25zdHJ1Y3Rvci5wdXNoKCBwb2ludC5jb25zdHJ1Y3RvciApO1xuXHRcdFx0XHRwb2ludCA9IHBvaW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gY29uc3RydWN0b3Iuc29tZSggZnVuY3Rpb24gb25FYWNoQ29uc3RydWN0b3IoIGNvbnN0cnVjdG9yICl7XG5cdFx0XHRcdHJldHVybiBjbGF6b2YoIGNvbnN0cnVjdG9yLCBibHVlcHJpbnQgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiggIXJlc3VsdCApe1xuXHRcdFx0bGV0IGNvbnN0cnVjdG9yID0gWyBdO1xuXHRcdFx0bGV0IHBvaW50ID0gZW50aXR5LmNvbnN0cnVjdG9yO1xuXHRcdFx0d2hpbGUoIGVlbiggY29uc3RydWN0b3IsIHBvaW50Ll9fcHJvdG9fXyApICl7XG5cdFx0XHRcdGNvbnN0cnVjdG9yLnB1c2goIHBvaW50Ll9fcHJvdG9fXyApO1xuXHRcdFx0XHRwb2ludCA9IHBvaW50Ll9fcHJvdG9fXztcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gY29uc3RydWN0b3Iuc29tZSggZnVuY3Rpb24gb25FYWNoQ29uc3RydWN0b3IoIGNvbnN0cnVjdG9yICl7XG5cdFx0XHRcdHJldHVybiBjbGF6b2YoIGNvbnN0cnVjdG9yLCBibHVlcHJpbnQgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1lbHNlIGlmKCBwcm90eXBlKCBlbnRpdHksIEZVTkNUSU9OICkgKXtcblx0XHRlbnRpdHkubmFtZSA9PT0gYmx1ZXByaW50Lm5hbWUgJiYgZW50aXR5LnRvU3RyaW5nKCApID09PSBibHVlcHJpbnQudG9TdHJpbmcoICk7XG5cdH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGF6b2Y7XG4iXX0=

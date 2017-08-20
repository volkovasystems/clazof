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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"annon": "annon",
              			"falzy": "falzy",
              			"fname": "fname",
              			"portel": "portel",
              			"protype": "protype",
              			"raze": "raze",
              			"stringe": "stringe",
              			'wauker': "wauker"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var annon = require("annon");
var falzy = require("falzy");
var fname = require("fname");
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
                                                 				"function",
                                                 				"*"
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
		return raze(arguments).splice(1).
		filter(function (blueprint) {return protype(blueprint, FUNCTION, STRING);}).
		every(function (blueprint) {return clazof(entity, blueprint);});
	}

	if (!protype(blueprint, FUNCTION + STRING)) {
		throw new Error("invalid blueprint");
	}

	if (falzy(entity) || !protype(entity, OBJECT + FUNCTION)) {
		entity = portel(entity);
	}

	if (
	(typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object" &&
	typeof blueprint == "function" &&
	entity instanceof blueprint)
	{
		return true;
	}

	if (
	typeof entity == "function" &&
	typeof blueprint == "function" && (
	annon(entity) || annon(blueprint)))
	{
		return false;
	}

	return wauker(entity).concat([Function, Object]).
	some(function (constructor) {
		return (
			fname(constructor) == fname(blueprint) ||
			stringe(constructor) == stringe(blueprint));

	});
};

module.exports = clazof;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXpvZi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFubm9uIiwicmVxdWlyZSIsImZhbHp5IiwiZm5hbWUiLCJwb3J0ZWwiLCJwcm90eXBlIiwicmF6ZSIsInN0cmluZ2UiLCJ3YXVrZXIiLCJjbGF6b2YiLCJlbnRpdHkiLCJibHVlcHJpbnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzcGxpY2UiLCJmaWx0ZXIiLCJGVU5DVElPTiIsIlNUUklORyIsImV2ZXJ5IiwiRXJyb3IiLCJPQkpFQ1QiLCJjb25jYXQiLCJGdW5jdGlvbiIsIk9iamVjdCIsInNvbWUiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFVBQVVKLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU0sVUFBVU4sUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU8sU0FBU1AsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTVEsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsU0FBekIsRUFBb0M7QUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLEtBQUlDLFVBQVVDLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsU0FBT1AsS0FBTU0sU0FBTixFQUFrQkUsTUFBbEIsQ0FBMEIsQ0FBMUI7QUFDTEMsUUFESyxDQUNHLFVBQUVKLFNBQUYsVUFBaUJOLFFBQVNNLFNBQVQsRUFBb0JLLFFBQXBCLEVBQThCQyxNQUE5QixDQUFqQixFQURIO0FBRUxDLE9BRkssQ0FFRSxVQUFFUCxTQUFGLFVBQWlCRixPQUFRQyxNQUFSLEVBQWdCQyxTQUFoQixDQUFqQixFQUZGLENBQVA7QUFHQTs7QUFFRCxLQUFJLENBQUNOLFFBQVNNLFNBQVQsRUFBb0JLLFdBQVdDLE1BQS9CLENBQUwsRUFBOEM7QUFDN0MsUUFBTSxJQUFJRSxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlqQixNQUFPUSxNQUFQLEtBQW1CLENBQUNMLFFBQVNLLE1BQVQsRUFBaUJVLFNBQVNKLFFBQTFCLENBQXhCLEVBQThEO0FBQzdETixXQUFTTixPQUFRTSxNQUFSLENBQVQ7QUFDQTs7QUFFRDtBQUNDLFNBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBakI7QUFDQSxRQUFPQyxTQUFQLElBQW9CLFVBRHBCO0FBRUFELG1CQUFrQkMsU0FIbkI7QUFJQztBQUNBLFNBQU8sSUFBUDtBQUNBOztBQUVEO0FBQ0MsUUFBT0QsTUFBUCxJQUFpQixVQUFqQjtBQUNBLFFBQU9DLFNBQVAsSUFBb0IsVUFEcEI7QUFFRVgsT0FBT1UsTUFBUCxLQUFtQlYsTUFBT1csU0FBUCxDQUZyQixDQUREO0FBSUM7QUFDQSxTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFPSCxPQUFRRSxNQUFSLEVBQWlCVyxNQUFqQixDQUF5QixDQUFFQyxRQUFGLEVBQVlDLE1BQVosQ0FBekI7QUFDTEMsS0FESyxDQUNDLFVBQUVDLFdBQUYsRUFBbUI7QUFDekI7QUFDQ3RCLFNBQU9zQixXQUFQLEtBQXdCdEIsTUFBT1EsU0FBUCxDQUF4QjtBQUNBSixXQUFTa0IsV0FBVCxLQUEwQmxCLFFBQVNJLFNBQVQsQ0FGM0I7O0FBSUEsRUFOSyxDQUFQO0FBT0EsQ0F2REQ7O0FBeURBZSxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoiY2xhem9mLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiY2xhem9mXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImNsYXpvZi9jbGF6b2YuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiY2xhem9mLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiY2xhem9mXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NsYXpvZi5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiY2xhem9mLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RnVuY3Rpb25hbCBpbnN0YW5jZW9mLlxyXG5cclxuXHRcdFRoaXMgd2lsbCB3YWxrIHRoZSBpbmhlcml0YW5jZSB0cmVlLlxyXG5cclxuXHRcdE11bHRpcGxlIGJsdWVwcmludCBpcyBzdHJpY3RseSBldmFsdWF0ZWQsIHNvIGlmIG9uZSBvZiB0aGVtIGlzIGZhbHN5XHJcblx0XHRcdHRoZW4gdGhpcyB3aWxsIHJldHVybiBmYWxzZS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFubm9uXCI6IFwiYW5ub25cIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwiZm5hbWVcIjogXCJmbmFtZVwiLFxyXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxyXG5cdFx0XHQnd2F1a2VyJzogXCJ3YXVrZXJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYW5ub24gPSByZXF1aXJlKCBcImFubm9uXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgZm5hbWUgPSByZXF1aXJlKCBcImZuYW1lXCIgKTtcclxuY29uc3QgcG9ydGVsID0gcmVxdWlyZSggXCJwb3J0ZWxcIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xyXG5jb25zdCB3YXVrZXIgPSByZXF1aXJlKCBcIndhdWtlclwiICk7XHJcblxyXG5jb25zdCBjbGF6b2YgPSBmdW5jdGlvbiBjbGF6b2YoIGVudGl0eSwgYmx1ZXByaW50ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwiKlwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA+IDIgKXtcclxuXHRcdHJldHVybiByYXplKCBhcmd1bWVudHMgKS5zcGxpY2UoIDEgKVxyXG5cdFx0XHQuZmlsdGVyKCAoIGJsdWVwcmludCApID0+IHByb3R5cGUoIGJsdWVwcmludCwgRlVOQ1RJT04sIFNUUklORyApIClcclxuXHRcdFx0LmV2ZXJ5KCAoIGJsdWVwcmludCApID0+IGNsYXpvZiggZW50aXR5LCBibHVlcHJpbnQgKSApO1xyXG5cdH1cclxuXHJcblx0aWYoICFwcm90eXBlKCBibHVlcHJpbnQsIEZVTkNUSU9OICsgU1RSSU5HICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIGVudGl0eSApIHx8ICFwcm90eXBlKCBlbnRpdHksIE9CSkVDVCArIEZVTkNUSU9OICkgKXtcclxuXHRcdGVudGl0eSA9IHBvcnRlbCggZW50aXR5ICk7XHJcblx0fVxyXG5cclxuXHRpZihcclxuXHRcdHR5cGVvZiBlbnRpdHkgPT0gXCJvYmplY3RcIiAmJlxyXG5cdFx0dHlwZW9mIGJsdWVwcmludCA9PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdGVudGl0eSBpbnN0YW5jZW9mIGJsdWVwcmludFxyXG5cdCl7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGlmKFxyXG5cdFx0dHlwZW9mIGVudGl0eSA9PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBibHVlcHJpbnQgPT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHQoIGFubm9uKCBlbnRpdHkgKSB8fCBhbm5vbiggYmx1ZXByaW50ICkgKVxyXG5cdCl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gd2F1a2VyKCBlbnRpdHkgKS5jb25jYXQoIFsgRnVuY3Rpb24sIE9iamVjdCBdIClcclxuXHRcdC5zb21lKCAoIGNvbnN0cnVjdG9yICkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdGZuYW1lKCBjb25zdHJ1Y3RvciApID09IGZuYW1lKCBibHVlcHJpbnQgKSB8fFxyXG5cdFx0XHRcdHN0cmluZ2UoIGNvbnN0cnVjdG9yICkgPT0gc3RyaW5nZSggYmx1ZXByaW50IClcclxuXHRcdFx0KTtcclxuXHRcdH0gKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xhem9mO1xyXG4iXX0=
//# sourceMappingURL=clazof.support.js.map

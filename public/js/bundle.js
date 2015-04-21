/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nicolasmondon on 08/02/15.
	 */
	
	var $ = __webpack_require__(1);
	var getData = __webpack_require__(2);
	
	
	$(function(){
	
	    getData.then(function(data){
	        console.log(data);
	
	    })
	
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by nicolasmondon on 08/02/15.
	 */
	
	var P = __webpack_require__(3);
	var d3 = __webpack_require__(4);
	var _ = __webpack_require__(5);
	
	var regSort = /(.+)-.* (\d+).*-.* (\d+).*/;
	var regCleanText = /\d+:\d+(.+)/;
	
	module.exports = new P(function(resolve){
	    d3.json('data/evangiles.json', function(data){
	
	        resolve(_.groupBy(data.map(function(v){
	            var regTab = v.title.match(regSort);
	            return _.extend({}, v, {
	                author: _.trim(regTab[1]),
	                chapter: parseInt(regTab[2]),
	                verset: parseInt(regTab[3]),
	                text: _.trim(v.text.match(regCleanText)[1])
	            });
	        }), function(v){
	            return v.author;
	        }));
	
	    });
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = P;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = d3;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = _;

/***/ }
/******/ ])
//# sourceMappingURL=bundle.js.map
(function () {
    'use strict';

  	/**
     * @ngdoc filter
     * @name fs.filter:fsMathRound
     * @param {number} number The number to be rounded
	 */
	angular.module('fs-angular-math',[])
	.filter('fsMathRound',function (fsMath) {
  		return function(number,precision) {
	    	return fsMath.round(number,precision);
	    }
  	});

})();
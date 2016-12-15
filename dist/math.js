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

(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name fs.fsMath
     * @description A collection of math related functions
     */
    angular.module('fs-angular-math')
    .factory('fsMath', function() {
        var service = {
            round: round
        };

        return service;

        /**
         * @ngdoc method
         * @methodOf fs.fsMath
         * @name round
         * @param {decimal} number The number to be rounded
         * @param {integer} precision How many decimal places to round
         * @returns {integer} Rounded number
         */
		function round(number, precision) {
			precision = precision || 0;
		    var factor = Math.pow(10, precision);
		    var tempNumber = number * factor;
		    var roundedTempNumber = Math.round(tempNumber);
		    return roundedTempNumber / factor;
		}
    });
})();

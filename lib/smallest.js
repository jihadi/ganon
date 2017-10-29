/**
 * `Smallest` takes an Array and returns the smallest element according to the
 * given ordering function.
 * @params {Array} Array of elements
 * @params {Function} test Test function that returns true when a is smaller than b
 * @returns {any} The smallest element in the input array
 */
function smallest(arr, test) {
  // find minimum in array i.e. arr 
  var min = Math.min.apply(null, ar);
	return min; 
    
}

module.exports = smallest;

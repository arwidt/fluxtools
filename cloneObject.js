/**
 * @function cloneObject
 * 
 * @description Will clone a object really fast.
 * From jsperf, took the fastest function for deep cloning
 * https://jsperf.com/deep-cloning-of-objects/45
 * Please note that its not possible to clone object thats to 
 * advanced, so keep the data to base literals like string or number.
 * Dont go saving react component or something like that.
 * 
 * @param  {Object} obj Clones a object
 * 
 * @return {Object}     The new cloned object
 */
const cloneObject = function(obj) {
    var i, len, ret;
    
    if (typeof obj !== 'object' || obj === null) { 
        return obj;
    }
    
    if (Array.isArray(obj)) {
        ret = [];
        len = obj.length;
        for (i = 0; i < len; i++) {
            ret.push( (typeof obj[i] === 'object' && obj[i] !== null) ? cloneObject(obj[i]) : obj[i] );
        }
    } else {
        ret = {};
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                ret[i] = (typeof obj[i] === 'object' && obj[i] !== null) ? cloneObject(obj[i]) : obj[i];
            }
        }
    }
    
    return ret;
}

module.exports = cloneObject;
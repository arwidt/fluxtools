/**
 * Will clone a object really fast.
 * From jsperf, took the fastest function for deep cloning
 * https://jsperf.com/deep-cloning-of-objects/45
 * 
 * @param {Object} obj 
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

export default cloneObject;
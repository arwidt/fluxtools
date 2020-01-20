/**
 * @function mergeObjects
 * 
 * @description Will merge those objects, copied from https://jsperf.com/deep-merge2/8
 * 
 * @param  {Object} obj1    Base object
 * @param  {Object} obj2    The object that contains the changes
 * 
 * @return {Object}         New merged object 
 */
const mergeObjects = function(obj1, obj2) {
    for (var p in obj2) { // jshint ignore:line
        try {
        // Property in destination object set; update its value.
        if (obj2[p].constructor === Object) {
            obj1[p] = mergeObjects(obj1[p], obj2[p]);
        } else {
            obj1[p] = obj2[p];
        }
        } catch (e) {
        // Property in destination object not set; create it and set its value.
        obj1[p] = obj2[p];
        }
    }
    return obj1;
}

module.exports = mergeObjects;
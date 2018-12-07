/**
 * Will deep merge a object with another.
 * 
 * Taken from https://jsperf.com/deep-merge2/8
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
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

export default mergeObjects;
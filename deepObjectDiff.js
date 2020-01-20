const detailedDiff = require('deep-object-diff').detailedDiff;
const mergeObjects = require('./mergeObjects.js');
const getAllPathsOfObject = require('./getAllPathsOfObject.js');

/**
 * @function deepObjectDiff
 * 
 * @description The deep object diff if used to check what has changed in the State object, this is very important since we only use on event
 * throughout the pattern, the State Changed. Therefor we stop the handler functions if the change is irrelevant to that component.
 * 
 * @param  {Object} obj1    The left diff object or "original". This is in most cases the old State object when you implement a Flux pattern with history.
 * @param  {Object} obj2    The new copy of the State object, this contains all the changes made.
 * 
 * @return {Array}          A list of paths that has changed
 */
const deepObjectDiff = function(obj1, obj2) {
    var diff = detailedDiff(obj1, obj2);
    return getAllPathsOfObject(mergeObjects(diff.added, diff.updated));
};

module.exports = deepObjectDiff;
const updatedDiff = require('deep-object-diff').updatedDiff;
const getAllPathsOfObject = require('./getAllPathsOfObject.js');

/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
const deepObjectDiff = function(obj1, obj2) {
    return getAllPathsOfObject(updatedDiff(obj1, obj2));
};

module.exports = deepObjectDiff;
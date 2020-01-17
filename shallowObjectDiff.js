const detailedDiff = require('deep-object-diff').detailedDiff;
const mergeObjects = require('./mergeObjects.js');
const getAllPathsOfObject = require('./getAllPathsOfObject.js');

/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
const shallowObjectDiff = function(obj1, obj2) {
  var diff = detailedDiff(obj1, obj2);
  return Object.keys(mergeObjects(diff.added, diff.updated));
};

module.exports = shallowObjectDiff;
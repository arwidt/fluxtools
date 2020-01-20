const detailedDiff = require('deep-object-diff').detailedDiff;
const mergeObjects = require('./mergeObjects.js');

/**
 * @function shallowObjectDiff
 * 
 * @description Sometimes when you want to save a bigger object in your State object
 * there can be allot of changes when you update the object. Like when you want to save
 * the object for a logged in user in the State object. When this happenes you can get flooded
 * with keys in the diff. In those situations it is better to keep the diff to the properties
 * on level 0.
 * 
 * @param  {Object} obj1  The base object
 * @param  {Object} obj2  The new object
 * 
 * @return {Array}        A list of the level 0 keys
 */
const shallowObjectDiff = function(obj1, obj2) {
  var diff = detailedDiff(obj1, obj2);
  return Object.keys(mergeObjects(diff.added, diff.updated));
};

module.exports = shallowObjectDiff;
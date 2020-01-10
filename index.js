
const cloneObject = require('./cloneObject.js');
const getAllPathsOfObject = require('./getAllPathsOfObject.js');
const defineStore = require('./defineStore.js');
const wantedDiffKeys = require('./wantedDiffKeys.js');
const deepObjectDiff = require('./deepObjectDiff.js');
const mergeObjects = require('./mergeObjects.js');

/**
* @function FluxTools
* @param  {type} const FluxTools {description}
* @return {type} {description}
*/
const FluxTools = {
  'getAllPathsOfObject': getAllPathsOfObject,
  'defineStore': defineStore,
  'wantedDiffKeys': wantedDiffKeys,
  'cloneObject': cloneObject,
  'deepObjectDiff': deepObjectDiff,
  'mergeObjects': mergeObjects
};

module.exports = FluxTools;
// export { getAllPathsOfObject, defineStore, wantedDiffKeys, cloneObject, deepObjectDiff, mergeObjects };
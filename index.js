
const cloneObject = require('./cloneObject.js');
const getAllPathsOfObject = require('./getAllPathsOfObject.js');
const defineStore = require('./defineStore.js');
const wantedDiffKeys = require('./wantedDiffKeys.js');
const deepObjectDiff = require('./deepObjectDiff.js');
const mergeObjects = require('./mergeObjects.js');
const shallowObjectDiff = require('./shallowObjectDiff.js');

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
  'mergeObjects': mergeObjects,
  'shallowObjectDiff': shallowObjectDiff
};

module.exports = FluxTools;
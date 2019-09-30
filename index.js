
import cloneObject from './cloneObject.js';
import getAllPathsOfObject from './getAllPathsOfObject.js';
import defineStore from './defineStore.js';
import wantedDiffKeys from './wantedDiffKeys.js';
import deepObjectDiff from './deepObjectDiff.js';
import mergeObjects from './mergeObjects.js';

/**
* @function FluxTools
* @param  {type} const FluxTools {description}
* @return {type} {description}
*/
const FluxTools = {
  getAllPathsOfObject,
  defineStore,
  wantedDiffKeys,
  cloneObject,
  deepObjectDiff,
  mergeObjects
};

export default FluxTools;
export { getAllPathsOfObject, defineStore, wantedDiffKeys, cloneObject, deepObjectDiff, mergeObjects };
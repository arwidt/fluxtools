import { updatedDiff } from 'deep-object-diff';
import getAllPathsOfObject from './getAllPathsOfObject.js';

/**
 * 
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
const deepObjectDiff = function(obj1, obj2) {
    return getAllPathsOfObject(updatedDiff(obj1, obj2));
};

export default deepObjectDiff;
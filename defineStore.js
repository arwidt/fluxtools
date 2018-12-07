import mergeObjects from './mergeObjects.js';

/**
 * Will merge the store with a object
 * 
 * @param {Object} store 
 * @param {Object} obj 
 */
const defineStore = function(store, obj) {
    return mergeObjects(store, obj);
};

export default defineStore;
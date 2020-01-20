const mergeObjects = require('./mergeObjects.js');

/**
 * @function defineStore
 * 
 * @description This function is used to merge or add new properties to the State object. It is a simple merge object function.
 * 
 * @param  {type} store The Store object
 * @param  {type} obj   The object containing the new data
 * 
 * @return {type}       A copy of the current State object
 */
const defineStore = function(store, obj) {
    return mergeObjects(store, obj);
};

module.exports = defineStore;
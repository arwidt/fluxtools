const flatMap = require('lodash.flatmap');
const isPlainObject = require('lodash.isplainobject');
const keys = require('lodash.keys');
const concat = require('lodash.concat');
const map = require('lodash.map');

/**
 * @function getAllPathsOfObject
 * 
 * @description This function si used in the deepObjectDiff to get all path from the diff.
 * The paths are used as keys of interest for each subscriber of the Store.
 * 
 * @param  {Object} obj A object, mostly the State object if use in the Flux pattern.
 * 
 * @return {Array}      A list of path in the object that has changed.
 */
const getAllPathsOfObject = function(obj) {
    function paths(obj, parentKey) {
        var result;
        if (Array.isArray(obj)) {
            var idx = 0;
            result = flatMap(obj, function (obj) {
                return paths(obj, (parentKey || '') + '[' + idx++ + ']');
            });
        }
        else if (isPlainObject(obj)) {
            result = flatMap(keys(obj), function (key) {
                return map(paths(obj[key], key), function (subkey) {
                    return (parentKey ? parentKey + '.' : '') + subkey;
                });
            });
        }
        else {
            result = [];
        }
        return concat(result, parentKey || []);
    }
    return paths(obj);
}

module.exports = getAllPathsOfObject;
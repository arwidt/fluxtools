const flatMap = require('lodash.flatmap');
const isPlainObject = require('lodash.isplainobject');
const keys = require('lodash.keys');
const concat = require('lodash.concat');
const map = require('lodash.map');

/**
 * 
 * Gets all paths of values in a object
 * 
 * @param {Object} obj 
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
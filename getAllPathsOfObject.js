import isArray from 'lodash/isArray';
import flatMap from 'lodash/flatMap';
import isPlainObject from 'lodash/isPlainObject';
import keys from 'lodash/keys';
import concat from 'lodash/concat';
import map from 'lodash/map';

/**
 * 
 * Gets all paths of values in a object
 * 
 * @param {Object} obj 
 */
const getAllPathsOfObject = function(obj) {
    function paths(obj, parentKey) {
        var result;
        if (isArray(obj)) {
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

export default getAllPathsOfObject;
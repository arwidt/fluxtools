/**
 * @function wantedDiffKeys
 * 
 * @description This is just a helper function to be able to list keys that your subscriber
 * is interested in.
 * 
 * @example <caption>Example</caption>
 * if (wantedDiffKeys(diff, ['test', 'test.things'])) {
 *   // Gives true if 'test' or 'test.things' are in diff array
 * }
 * 
 * @param  {Array} diff     The diff sent to you from the Store
 * @param  {Array} paths    Your specified paths that should give you true
 * @return {Boolean}        The result of the diff matching
 */
const wantedDiffKeys = function(diff, paths) {
    for (var i = 0, len = paths.length; i < len; i++) {
        if (diff.indexOf(paths[i]) > -1) {
            return true;
        }
    }
    return false;
}

module.exports = wantedDiffKeys;
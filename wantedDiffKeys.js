/**
 * Guards for wanted paths in diff
 * 
 * @param {Array} diff 
 * @param {Array} paths 
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
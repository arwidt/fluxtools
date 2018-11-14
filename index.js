
import { updatedDiff } from "deep-object-diff";
import { isArray, flatMap, isPlainObject, keys, concat, map } from 'lodash';
import PubSub from 'pubsub-js';

// Fastest merge function from jsperf
// https://jsperf.com/deep-merge2/8
const _mergeObjects = function(obj1, obj2) {
  for (var p in obj2) { // jshint ignore:line
    try {
      // Property in destination object set; update its value.
      if (obj2[p].constructor === Object) {
        obj1[p] = mergeRecursive(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch (e) {
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}

const _getAllPathsOfObject = function(obj) {
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

const _defineStore = function(store, obj) {
  return _mergeObjects(store, obj);
}

const _wantedDiffKeys = function(diff, paths) {
  for (var i = 0, len = paths.length; i < len; i++) {
    if (diff.indexOf(paths[i]) > -1) {
      return false;
    }
  }
  return true;
}


// From jsperf, took the fastest function for deep cloning
// https://jsperf.com/deep-cloning-of-objects/45
const _cloneObject = function(obj) {
  var i, len, ret;
  
  if (typeof obj !== 'object' || obj === null) { 
    return obj;
  }
  
  if (Array.isArray(obj)) {
    ret = [];
    len = obj.length;
    for (i = 0; i < len; i++) {
      ret.push( (typeof obj[i] === 'object' && obj[i] !== null) ? _cloneObject(obj[i]) : obj[i] );
    }
  } else {
    ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = (typeof obj[i] === 'object' && obj[i] !== null) ? _cloneObject(obj[i]) : obj[i];
      }
    }
  }
  
  return ret;
}

/**
* @function FluxTools
* @param  {type} const FluxTools {description}
* @return {type} {description}
*/
const FluxTools = {
  
  getAllPathsOfObject: _getAllPathsOfObject,
  
  defineStore: _defineStore,
  
  wantedDiffKeys: _wantedDiffKeys,
  
  cloneObject: _cloneObject,
  
  deepObjectDiff(o1, o2) {
    return _getAllPathsOfObject(updatedDiff(o1, o2));
  },
  
  pubsub: PubSub
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = FluxTools;
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return FluxTools
    })
  } else {
    window.FluxTools = FluxTools
  }
}

// Deep object diff tool

// Pubsub clone system

// Add to store without making it corruptable

// Fast clone the store tool

// Guard for diffs of interest

// Sample project

const FluxTools = {
    test: () => {
        return "test";
    }
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
"use strict";

import FluxTools from './index.js';
import {
  getAllPathsOfObject,
  defineStore,
  deepObjectDiff,
  wantedDiffKeys,
  cloneObject,
  shallowObjectDiff
} from './index.js';


var should = require('should');

describe('FluxTools.js', function() {

    describe('Trivial test', function() {
        it('should run a trivial test', function() {
            should(true).equal(true);
        });
    });

    describe('FluxTools global', function() {

        it('should have all the functions', function() {

            FluxTools.should.have.ownProperty('getAllPathsOfObject');
            FluxTools.should.have.ownProperty('defineStore');
            FluxTools.should.have.ownProperty('deepObjectDiff');
            FluxTools.should.have.ownProperty('wantedDiffKeys');
            FluxTools.should.have.ownProperty('cloneObject');

        });

    });

    describe('getAllPathsOfObject', function() {

        const objbase = {
            a: "a",
            b: {
                c: 123,
                d: "d",
                e: {
                    f: "äf"
                },
                g: [1, 2, 3, 4]
            }
        };

        it('should return keys obj a object', function() {

            const paths = getAllPathsOfObject(objbase);
            paths.should.containEql('a');
            paths.should.containEql('b.c');
            paths.should.containEql('b.d');
            paths.should.containEql('b.e.f');
            paths.should.containEql('b.g');
            paths.should.containEql('b.g[0]');
            paths.should.containEql('b.g[1]');
            paths.should.containEql('b.g[2]');
            paths.should.containEql('b.g[3]');
        });
        
    });

    describe('defineStore', function() {

        const store = {
            a: "a",
            b: {
                c: "c"
            }
        };

        it('should be possible to add to or define store structure', function() {
            let newstore = defineStore(store, {d: "d"});

            newstore.d.should.equal("d");
            newstore.a.should.equal("a");
            newstore.should.equal(store);
        });

    });

    describe('deepObjectDiff', function() {
        
        const objbase = {
            a: "a",
            b: {
                c: 123,
                d: "d",
                e: {
                    f: "äf"
                },
                g: [1, 2, 3, 4]
            }
        };

        // -------------------------------
        // Single shallow diff
        const test1 = {
            a: "AAAAA"
        }

        it('should handle a single shallow diff', function() {
            const diff = deepObjectDiff(objbase, test1);
            diff.length.should.equal(1);
            diff[0].should.equal('a');
        });

        // -------------------------------
         // Multiple shallow diffs
         const test2 = {
            a: "AAAA",
            g: "GGGG"
        }

        it('should handle multiple shallow diffs', function() {
            const diff = deepObjectDiff(objbase, test2);
            diff.length.should.equal(2);
            diff.should.containEql('a');
            diff.should.containEql('g');
        });

        // -------------------------------
        // Two deep diff
        const test3 = {
            b: {
                d: "DDDD",
                e: {
                    f: "FFFF"
                }
            }
        }

        it('should handle a deep diff', function() {
            const diff = deepObjectDiff(objbase, test3);
            diff.should.containEql('b.e.f');
            diff.should.containEql('b.d');
        });

        // All the diffs
        const test4 = {
            a: "AAAAA",
            b: {
                d: "DDDDD",
                e: {
                    newthing: "NEWTHING",
                    f: "FFFFF"
                },
                g: [1, 5, 3, 4]
            },
            
        };

        it('should handle all sorts of different update diffs', function() {
            const diff = deepObjectDiff(objbase, test4);
            diff.should.containEql('a');
            diff.should.containEql('b');
            diff.should.containEql('b.d');
            diff.should.containEql('b.e');
            diff.should.containEql('b.e.f');
            diff.should.containEql('b.g');
            diff.should.containEql('b.e.newthing');
        });
        
    });

    describe('shallowObjectDiff', function() {

        const objbase = {
            a: "a",
            b: {
                c: 123,
                d: "d",
                e: {
                    f: "äf"
                },
                g: [1, 2, 3, 4]
            },
            c: [1,2,3]
        };

        const test = {
            a: "AAAAA",
            b: {
                d: "DDDDD",
                e: {
                    newthing: "NEWTHING",
                    f: "FFFFF"
                },
                g: [1, 5, 3, 4]
            },
            c: [1,99, 3],
            d: ['asdf']
        };

        it('should only show level 0 diff when state is updated', function() {
            const diff = shallowObjectDiff(objbase, test);

            diff.should.not.containEql('b.d');
            diff.should.not.containEql('b.c');
            diff.should.not.containEql('b.e.newthing');
            diff.should.containEql('a');
            diff.should.containEql('b');
            diff.should.containEql('c');
            diff.should.containEql('d');
            diff.length.should.equal(4);
        });

    });

    describe('wantedDiffKeys', function() {
        
        it('should guard from unwanted diffs', function() {
            const diff = ['a', 'b.d.e', 'f.g'];

            wantedDiffKeys(diff, ['a']).should.equal(true);
            wantedDiffKeys(diff, ['a.b.c.d']).should.equal(false);
            wantedDiffKeys(diff, ['b.d']).should.equal(false);
            wantedDiffKeys(diff, ['asdf', '8jf', 'g.f']).should.equal(false);
            wantedDiffKeys(diff, ['asdf', '8jf', 'f.g', 'g.f']).should.equal(true);
        });

    });

    describe('cloneObject', function() {

        const test1 = {
            a: "AAAAA",
            b: {
                d: "DDDDD",
                e: {
                    newthing: "NEWTHING",
                    f: "FFFFF"
                },
                g: [1, 5, 3, 4]
            }
        };

        it('should clone a deep but simple object', function() {
            const clone = cloneObject(test1);

            clone.should.not.equal(test1);
            clone.a.should.equal("AAAAA");
            clone.b.e.newthing.should.equal("NEWTHING");
            clone.b.g[1].should.equal(5);
        });

        const test2 = {
            a: "AAAAA",
            b: {
                d: function() {
                    return this;
                },
                e: {
                    newthing: "NEWTHING",
                    f: (function() {
                        return function() {
                            return "testbanan";
                        }
                    })()
                },
                g: [1, 5, 3, 4]
            }
        }

        it('should clone a deep and complex object without failing', function() {
            const clone = cloneObject(test2);

            clone.b.d().should.not.equal(test2.b);
            clone.b.d().should.equal(clone.b);
            clone.a.should.equal('AAAAA');
            clone.b.e.f().should.equal('testbanan');
        });

    });

});
"use strict";

var expect = require('chai').expect;

const stop = require('../src/index');

describe('Stop', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
        	let stopTestContent = `
	start Hello {
        string whom
        -> Say
    }
    
    stop Say {
        string words
    }
        	`;
        	let stopInstance = new stop.Stop(stopTestContent);
        	expect(stopInstance).to.not.equal(undefined);
        });
    });
});
"use strict";

var expect = require('chai').expect;

const stop = require('../src/index');

describe('Stop', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
        	let stopTestContent = `
	start Hello {
        string test
        -> Say
    }
    
    stop Say {
        string words
    }
        	`;
        	expect(function(){
        		new stop.Stop(stopTestContent);
        	}).to.not.throw();
        });
        it('should throw an error', function() {
        	let stopTestContent = `
	start Hello {
        	`;
        	expect(function(){
        		new stop.Stop(stopTestContent);
        	}).to.throw();
        });
    });
});
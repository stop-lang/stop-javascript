"use strict";

var expect = require('chai').expect;

const stop = require('../src/index');

describe('Stop', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
        	let stopTestContent = `
	start Hello throws Error{
        string test
        >> Queue
        -> Say
    }
    
    stop Say {
        string words
    }

    stop Error {
        string message
    }

    queue Queue {
        string message
        -> Send
    }

    stop Send {
        string message
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
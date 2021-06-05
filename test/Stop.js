"use strict";

import chai from 'chai';
const expect = chai.expect;

import Stop from '../src/Stop.js';

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
        		new Stop(stopTestContent);
        	}).to.not.throw();
        });
        it('should throw an error', function() {
        	let stopTestContent = `
	start Hello {
        	`;
        	expect(function(){
        		new Stop(stopTestContent);
        	}).to.throw();
        });
    });
});
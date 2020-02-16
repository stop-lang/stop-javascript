"use strict";

var expect = require('chai').expect;

const stop = require('../src/index');

describe('Enumerations', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
        	let stopTestContent = `
	enum Type {
        ONE
        TWO
        THREE
    }

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
    });
    describe('inner', function() {
        it('should create a stop instance based on an input string', function() {
            let stopTestContent = `
    start Hello {
        enum Type {
            ONE
            TWO
            THREE
        }
        Type type
        string test
        -> Say
    }
    
    stop Say {
        string words
    }
            `;
            expect(function(){
                let s = new stop.Stop(stopTestContent);
                expect(s.enumerations.length, 1, 'enumerations should be 1');
                expect(s.enumerations['Hello.Type']).to.exist;
                expect(s.enumerations['Hello.Type'].name).to.equal('Hello.Type');
            }).to.not.throw();
        });
    });
});
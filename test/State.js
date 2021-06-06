"use strict";

import chai from 'chai';
const expect = chai.expect;

import Stop from '../src/Stop.js';

describe('State', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
            let stopTestContent = `
    start Hello {
        enum Type {
            ONE
            TWO
            THREE
        }
        string name <- GetName
        Type type
        string test
        string one
        string two
        int64 three
        bytes four
        -> Say
    }

    GetName <- string {

    }
    
    stop Say {
        string words
    }
            `;
            expect(function(){
                let s = new Stop(stopTestContent);
                expect(s.states.length, 2, 'states should be 2');
                expect(s.states['Hello']).to.exist;
                let ordered = s.states['Hello'].getOrderedProperties();
                expect(ordered.length, 7, 'states should be 7');
                expect(ordered[0].name, "type");
                expect(ordered[1].name, "test");
                expect(ordered[2].name, "one");
                expect(ordered[3].name, "two");
                expect(ordered[4].name, "three");
                expect(ordered[5].name, "four");
                expect(ordered[6].name, "name");
            }).to.not.throw();
        });
    });
});
"use strict";

import chai from 'chai';
const expect = chai.expect;

import Stop from '../src/Stop.js';
import StateInstance from '../src/models/StateInstance.js';

describe('StateInstance', function() {
    describe('instance', function() {
        it('should create a stop state instance based on an input string', function() {
        	let stopTestContent = `
	start A {
        string test
        optional int64 number
        optional Two two
        -> B
    }
    
    One {
        string alpha
        optional string beta
    }

    Two {
        string three
    }

    stop B {
        One one
    }
        	`;
        	let stopInstance = new Stop(stopTestContent);
            let stateInstance = new StateInstance(stopInstance.states["A"], {test: "test"})
        	expect(stateInstance.validateProperties()).to.equal(true);

            expect(function(){
                let stateInstance2 = new StateInstance(stopInstance.states["A"], {test: 4})
                stateInstance2.validateProperties();
            }).to.throw();

            expect(function(){
                let stateInstance3 = new StateInstance(stopInstance.states["A"], {})
                stateInstance3.validateProperties();
            }).to.throw();

            expect(function(){
                let stateInstance3 = new StateInstance(stopInstance.states["A"], {test: "test", number: "wrong"})
                stateInstance3.validateProperties();
            }).to.throw();

            expect(function(){
                let stateInstance4 = new StateInstance(stopInstance.states["A"], {test: "test", number: 1})
                stateInstance4.validateProperties();
            }).to.not.throw();

            expect(function(){
                let stateInstance5 = new StateInstance(stopInstance.states["A"], {test: "test", number: 1.5})
                stateInstance5.validateProperties();
            }).to.throw();

            expect(function(){
                let twoInstance = new StateInstance(stopInstance.states["Two"], {three: "three"})
                let stateInstance6 = new StateInstance(stopInstance.states["A"], {test: "test", number: 1, two: twoInstance})
                stateInstance6.validateProperties();
            }).to.not.throw();

            expect(function(){
                let twoInstance1 = new StateInstance(stopInstance.states["Two"], {three: 3})
                let stateInstance7 = new StateInstance(stopInstance.states["A"], {test: "test", number: 1, two: twoInstance1})
                stateInstance7.validateProperties();
            }).to.throw();
        });
    });
});
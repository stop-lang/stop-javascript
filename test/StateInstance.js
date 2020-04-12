"use strict";

var expect = require('chai').expect;

const stop = require('../src/index');

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
        	let stopInstance = new stop.Stop(stopTestContent);
         //    let stateInstance = new stop.StateInstance(stopInstance.states["A"], {test: "test"})
        	// expect(stateInstance.validateProperties()).to.equal(true);

         //    expect(function(){
         //        let stateInstance2 = new stop.StateInstance(stopInstance.states["A"], {test: 4})
         //        stateInstance2.validateProperties();
         //    }).to.throw();

         //    expect(function(){
         //        let stateInstance3 = new stop.StateInstance(stopInstance.states["A"], {})
         //        stateInstance3.validateProperties();
         //    }).to.throw();

            // expect(function(){
                let stateInstance3 = new stop.StateInstance(stopInstance.states["A"], {test: "test", number: "wrong"})
                stateInstance3.validateProperties();
            // }).to.throw();

            // expect(function(){
            //     let stateInstance4 = new stop.StateInstance(stopInstance.states["A"], {test: "test", number: 1})
            //     stateInstance4.validateProperties();
            // }).to.not.throw();

            // expect(function(){
            //     let stateInstance5 = new stop.StateInstance(stopInstance.states["A"], {test: "test", number: 1.5})
            //     stateInstance5.validateProperties();
            // }).to.throw();

            // expect(function(){
            //     let twoInstance = new stop.StateInstance(stopInstance.states["Two"], {three: "three"})
            //     let stateInstance6 = new stop.StateInstance(stopInstance.states["A"], {test: "test", number: 1, two: twoInstance})
            //     stateInstance6.validateProperties();
            // }).to.not.throw();

            // expect(function(){
            //     let twoInstance1 = new stop.StateInstance(stopInstance.states["Two"], {three: 3})
            //     let stateInstance7 = new stop.StateInstance(stopInstance.states["A"], {test: "test", number: 1, two: twoInstance1})
            //     stateInstance7.validateProperties();
            // }).to.throw();
        });
    });
});
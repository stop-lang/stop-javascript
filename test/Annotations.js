"use strict";

import chai from 'chai';
const expect = chai.expect;

import Stop from '../src/Stop.js';

describe('Annotations', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
            let stopTestContent = `
    start Router {
        -> Dashboard
    }

    User {
        string id
        string name
    }

    @User
    AdminUser {
        string id
        string name
        bool superpower
    }

    @template
    stop Dashboard {
        @User currentUser
    }
            `;
            expect(function(){
                let s = new Stop(stopTestContent);
                expect(s.states.length, 4, 'states should be 4');
                expect(s.states['AdminUser']).to.exist;
                expect(s.states['AdminUser'].annotations.length, 1, 'states should be 1');
                let stateAnnotation = s.states['AdminUser'].annotations[0];
                expect(stateAnnotation.state.name, "User", "should be user")
                expect(stateAnnotation.name, "User", "should be user")
                let templateAnnotation = s.states['Dashboard'].annotations[0];
                expect(templateAnnotation.name, "template", "should be template")
                let property = s.states['Dashboard'].properties["currentUser"];
                expect(property.type, "@User", "should be @User")
                expect(property.state.name, "User", "should be User")
            }).to.not.throw();
        });
    });
});
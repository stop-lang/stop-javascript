"use strict";

import chai from 'chai';
const expect = chai.expect;

import Stop from '../src/Stop.js';

describe('References', function() {
    describe('basic', function() {
        it('should validate references', function() {
        	let stopTestContent = `
	start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    GetB <- B {
        string b
    }
    
    stop C {
        string c1
        B b <- GetB(b: c1)
    }
        	`;
        	expect(function(){
        		new Stop(stopTestContent);
        	}).to.not.throw();
        });
        it('should validate return collection', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    GetB <- B {
        string b
    }

    D {
        string e
    }

    GetD <- [D] {
        string c1
    }

    F <- [string] {
    }

    G <- string {

    }
    
    stop C {
        string c1
        B b <- GetB(b: c1)
        [D] d <- GetD
        [string] f <- F
        string g <- G
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.not.throw();
        });
        it('should not validate reference where types don\'t match', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    GetB <- B {
        int64 b
    }
    
    stop C {
        string c1
        B b <- GetB(b: c1)
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.throw();
        });
        it('should validate nested references', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    D {
        E e
    }

    E {
        F f
    }

    F {
        string h
    }

    GetB <- B {
        string b
    }
    
    stop C {
        D d
        B b <- GetB(b: d.e.f.h)
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.not.throw();
        });
        it('should validate optional nested references', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    D {
        E e
    }

    E {
        optional F f
    }

    F {
        string h
    }

    GetB <- B {
        optional string b
    }
    
    stop C {
        D d
        B b <- GetB(b: d.e.f.h)
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.not.throw();
        });
        it('should not validate optional nested references', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    D {
        E e
    }

    E {
        optional F f
    }

    F {
        string h
    }

    GetB <- B {
        string b
    }
    
    stop C {
        D d
        B b <- GetB(b: d.e.f.h)
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.throw();
        });
        it('should not validate optional nested references', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    D {
        E e
    }

    E {
        optional string f
    }

    F {
        string h
    }

    GetB <- B {
        string b
    }
    
    stop C {
        D d
        B b <- GetB(b: d.e.f.h)
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.throw();
        });
        it('should not validate references where collection doesn\'t match', function() {
            let stopTestContent = `
    start A {
        string a1
        -> C
    }

    B {
        int64 b1
    }

    D {
        E e
    }

    E {
        optional F f
    }

    F {
        [string] h
    }

    GetB <- B {
        optional string b
    }
    
    stop C {
        D d
        B b <- GetB(b: d.e.f.h)
    }
            `;
            expect(function(){
                new Stop(stopTestContent);
            }).to.throw();
        });
    });
});
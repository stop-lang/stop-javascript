"use strict";

import chai from 'chai';
const expect = chai.expect;

import Stop from '../src/Stop.js';

describe('Validations', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
            let stopTestContent = `
    start Begin {
        string post_type {
            !state @Post
        }
        string email {
            !regex(matches: "email_regex")
            !length(min: 3, max: 255)
        }
        int64 slot {
            !range(min: 1, max:10)
        }
        -> End
    }
    
    Post {
        string title
    }
    
    @Post
    Podcast {
        string title
        string url
    }
    
    @Post
    Video {
        string title
        string url
        string format
    }
    
    stop End {
    
    }
            `;
            expect(function(){
                let s = new Stop(stopTestContent);
                expect(s.states.length, 5, 'states should be 4');
                expect(s.states['Begin']).to.exist;
            }).to.not.throw();
        });
    });
});
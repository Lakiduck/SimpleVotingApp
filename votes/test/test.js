import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
chai.use(jsonSchema);
import votes from '../controllers/votes.js';

var testCase = await votes("Zac Butters");

describe('Brownlow Votes Type', () => 
{

    
    console.log(testCase);

    const ZacTestOutcome = {
        "Zac Butters":1
    };

    const badResult = {
        "Zac Butters": null
    };

    it('check submit vote returns a valid JSON', () => {
        expect(testCase).to.be.jsonSchema(ZacTestOutcome);
    })

    it('check result is not null', () => {
        assert.jsonSchema(testCase, badResult);
    })
}
)
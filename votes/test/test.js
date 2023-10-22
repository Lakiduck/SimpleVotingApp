import chai, { assert, expect } from 'chai';
import jsonSchema from 'chai-json-schema';
chai.use(jsonSchema);
import votes from '../controllers/votes.js';
import rateTester from './modules/rateTester.js';
import 'dotenv/config';

var testCase = await votes("Zac Butters");

const URI = "http://" + process.env.VOTING_SERVICE_IP + ":3000/";

let status = await rateTester(URI, 100, 30000);

describe('Brownlow Votes Type', () => 
{

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

describe('DoS Tests', () => 
{
    it('check / get call hits limit', () => {
        expect(status).to.be.equal(429);
    })
}
)
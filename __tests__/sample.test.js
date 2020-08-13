// Notes of testing

// Jest
// - a testing framework
// - is a test runner
// - crawl folder structure to look for test
// - npm run test
// - mocking, fake the actual running of the function


// Enzyme
// - testing react components
// - from airbnb
// - shallow render or mounting it
// - Note: there is a specific version of Enzyme for each version of React

// Shallow
// - not rendered to their true HTML because it simply renders the top level components
// - wrapper.debug() => this is used to show the elements that are found inside a particular component
// - cannot test the functionality of a component

// Mounting
// - 

describe('sample test 101', () => {
    it('works as expected', () => {
        const age = 100;
        expect(1).toEqual(1);
        expect(age).toEqual(100);
    });

    it('handles ranges just fine', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    });

    it('makes a list of dog names', () => {
        const dogs =['snickers', 'hugo'];
        expect(dogs).toEqual(dogs);
        expect(dogs).toContain('snickers');
    });
});
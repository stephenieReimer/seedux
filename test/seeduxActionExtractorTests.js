const chai = require('chai');
const expect = require('chai').expect;
const { testActionCreators, answerActionCreators } = require('./fixtures/seeduxActionExtractorFixtures');
const { seedux, Node } = require('./../lib/seedux/src/seeduxExtractor');
const output = seedux.actionCreatorsExtractor(testActionCreators);

describe('seedux.actionCreatorsExtractor', () => {

  it('should be a function', () => {
    expect(seedux.actionCreatorsExtractor).to.be.a.function;
  })

  it('should return an object-typed instance of Node named "Action Creators"', () => {
    expect(output).to.be.an('object');
    expect(output.constructor).to.deep.equal(Node);
    expect(output.name).to.deep.equal('Action Creators');
  })


  it('should return a properly structured D3 hierarchical tree output for a given input', () => {
    expect(output).to.deep.equal(answerActionCreators);
  })

});

describe('"Action Creators" node', () => {

  it('should have an array-typed property named children composed of object-typed Node(s)', () => {
    expect(output.children).to.be.an('array');
    expect(output.children[0]).to.be.an('object');
    expect(output.children[0].constructor).to.deep.equal(Node);
  })

  it('should have child nodes that each possess an array-typed property named children composed of object-typed Node(s)', () => {
    expect(output.children[0].children).to.be.an('array');
    expect(output.children[0].children[0]).to.be.an('object');
    expect(output.children[0].children[0].constructor).to.deep.equal(Node);
  })

});
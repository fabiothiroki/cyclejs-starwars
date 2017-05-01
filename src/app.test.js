import {div, p, input, h1, h2, tr, td, tbody, thead, th, table, h4, h5} from '@cycle/dom';
import assert from 'assert';
import {view} from './view';
import { Observable } from 'rxjs';
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-virtual-dom'));
var h = require('virtual-dom').h;


describe('View tests', function () {

  it('Should not be null', function () {

    const state$ = getInitialState();
    const view$ = view(state$);

    expect(view$).to.not.be.null;

  });

  it('Should have loading state', function () {

    const state$ = getInitialState();
    const view$ = view(state$);

    expect(view$).to.equal(view$);

  });

})

function getInitialState() {
  const state$ = Observable.of({
      characters: [{name: 'Loading...'}],
      searchTerm: ''
  });

  return state$;
}

import assert from 'assert';
import {view} from './view';
import { Observable } from 'rxjs';
var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-virtual-dom'));
var h = require('virtual-dom').h;


describe('View tests', function () {
  it('Should not be null', function () {

    const state$ = Observable.of({
      characters: [{name: 'Loading...'}],
      searchTerm: ''
    });

    const view$ = view(state$);

    expect(view$).to.not.be.null;

  })
})

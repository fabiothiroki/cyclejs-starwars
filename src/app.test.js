import {div, p, input, h1, h2, tr, td, tbody, thead, th, table, h4, h5} from '@cycle/dom';
import assert from 'assert';
import {view} from './view';
import { Observable } from 'rxjs';
var chai = require('chai');
chai.use(require('chai-virtual-dom'));
var h = require('virtual-dom').h;


describe('View tests', function () {

  it('Should not be null', function () {

    const state$ = getInitialState();
    const view$ = view(state$);

    assert.notEqual(view$, null);

  });

  it('Should have loading state', function () {

    const state$ = getInitialState();
    const view$ = view(state$);

    const expected$ = div(".card", [
      div('.card-header', [
        h4('.title', 'Star Wars Character Search'),
        input('#search.form-control', {props: {type: "text", placeholder: "Type to search"}})
      ]),
      div('.card-content .table-responsive',[
        table('.table', [
          thead(tr(th(h5('Name')))),
          tbody(tr(td('Loading...')))
        ])
      ])
    ]);

    assert.deepEqual(view$. expected$);

  });

  it('Should populate character data', function () {

    const state$ = getInitialState();
    const view$ = view(state$);

    const expected$ = div(".card", [
      div('.card-header', [
        h4('.title', 'Star Wars Character Search'),
        input('#search.form-control', {props: {type: "text", placeholder: "Type to search"}})
      ]),
      div('.card-content .table-responsive',[
        table('.table', [
          thead(tr(th(h5('Name')))),
          tbody(tr(td('Loading...')))
        ])
      ])
    ]);

    assert.deepEqual(view$. expected$);

  });

})

function getInitialState() {
  const state$ = Observable.of({
      characters: [{name: 'Loading...'}],
      searchTerm: ''
  });

  return state$;
}

function getValidState() {
  const state$ = Observable.of({
      characters: [{name: 'Loading...'}],
      searchTerm: ''
  });

  return state$;
}

import assert from 'assert';
import {run} from '@cycle/run';
// import createRenderTarget from './helper/createRenderTarget';
import {App} from './app'
import {makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import Rx from 'rxjs';

describe('App', function () {
  it('should test something', function () {

    function app(sources) {
    return {
      DOM: Rx.Observable.just(
        h3('.top-most', [
          sources.DOM.isolateSink(Rx.Observable.just(
            div('.foo', [
              h4('.bar', 'Wrong')
            ])
          ), 'ISOLATION'),
          h2('.bar', 'Correct'),
        ])
      )
    };
  }

  // let {sinks, sources} = run(app, {
  //   DOM: makeDOMDriver(createRenderTarget())
  // });

  })
})

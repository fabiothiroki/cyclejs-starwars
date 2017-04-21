import {div, p, input} from '@cycle/dom'
import { Observable } from 'rxjs'

export function App (sources) {

  return {
    DOM: Observable.of(div("Hello World!")),
  };
}




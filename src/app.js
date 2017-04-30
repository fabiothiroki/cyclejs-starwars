import {div, p, input, h1, h2, tr, td, tbody, thead, th, table} from '@cycle/dom'
import { Observable } from 'rxjs'

export function App (sources) {

  const intents$ = {
    apiResponse: sources.HTTP.select('api').flatten(),

    changeSearchTerm: sources.DOM.select('#search')
      .events("input")
      .map(ev => ev.target.value)
      .startWith('')
  }

  const state$ = state(intents$)

  return {
    DOM: view(state$),
    HTTP: intents$.changeSearchTerm.map( searchTerm => {
      return {
        url: 'https://swapi.co/api/people/?search=' + searchTerm,
        category: 'api',
      }
    })
  };
}

function state(intents$){

  return Observable.combineLatest(intents$.apiResponse, intents$.changeSearchTerm)
    .map((combined) => {

      const [response, searchTerm] = combined

      return {
        characters: response.body.results,

        searchTerm: searchTerm
      };
    })
    .startWith({
      characters: [{name: 'Loading'}],

      searchTerm: ''
    })
}


function view(state$) {
  return state$.map((state) => {

    const list = state.characters.map( character => {
      return tr(td(character.name));
    });

    return table('.table', [
      thead(tr(th('Name'))),
      tbody(list)
    ]);

  });
}

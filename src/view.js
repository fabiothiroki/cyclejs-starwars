import {div, p, input, h1, h2, tr, td, tbody, thead, th, table, h4, h5} from '@cycle/dom'


export function view(state$) {
  return state$.map((state) => {

    const list = state.characters.map( character => {
      return tr(td(character.name));
    });

    return div(".card", [
      div('.card-header', [
        h4('.title', 'Star Wars Character Search'),
        input('#search.form-control', {props: {type: "text", placeholder: "Type to search", value: state.searchTerm}})
      ]),
      div('.card-content .table-responsive',[
        table('.table', [
          thead(tr(th(h5('Name')))),
          tbody(list)
        ])
      ])
    ]);


  });
}


export function view(state$) {
  return state$.map((state) => {

    const list = state.characters.map( character => {
      return tr(td(character.name));
    });

    return div(".card", [
      div('.card-header', [
        h4('.title', 'Star Wars Character Search'),
        input('#search.form-control', {props: {type: "text", placeholder: "Type to search"}})
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

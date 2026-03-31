export function initSearching(searchField) {
    return (query, state, action) => {
        console.log(state)
        return state[searchField] ? Object.assign({}, query, {
            search: state[searchField]
        }) : query
    }
}
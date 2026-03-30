export function initSearching(searchField) {
    return (query, state, action) => {
        return state[searchField] ? Object.assign({}, MediaQueryList, {
            search: state[searchField]
        }) : query
    }
}
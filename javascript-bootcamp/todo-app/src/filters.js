const filters = {
    searchText: '',
    hideCompleted: false
}

export const getFilters = () => filters

export const setFilters = ({ searchText, hideCompleted }) => {
    if(typeof searchText === 'string') {
        filters.searchText = searchText
    }

    if(typeof hideCompleted === 'string') {
        filters.hideCompleted = hideCompleted
    }
}

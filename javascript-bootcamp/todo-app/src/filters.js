const filters = {
    searchText: '',
    hideCompleted: false
}

export const getFilters = () => filters

export const setFilters = (updates) => {
    if(typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if(typeof updates.hideCompleted === 'string') {
        filters.hideCompleted = updates.hideCompleted
    }
}

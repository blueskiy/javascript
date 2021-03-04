const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

export const getFilters = () => filters

export const setFilters = (updates) => {
    if(typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if(typeof updates.sortBy === 'string') {
        filters.sortBy = updates.sortBy
    }
}
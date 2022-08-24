import React, { createContext, useContext, useState } from "react";
import chalk from "chalk";
const SearchContext = createContext("");
const SetSearchContext = createContext();

function SearchProvider(props) {
    const [search, setSearch] = useState("");
    return (
        <SearchContext.Provider value={search}>
            <SetSearchContext.Provider value={setSearch}>
                {props.children}
            </SetSearchContext.Provider>
        </SearchContext.Provider>
    )
}
function useSearch() {
    return useContext(SearchContext);
}
function useSetSearch() {
    return useContext(SetSearchContext);
}
function useSearchAction() {
    const search = useSearch();
    const setSearch = useSetSearch();
    const searchProduct = (products) => {
        return products.filter((item) => {
            if (item.title.includes(search)) {
                console.log(chalk.blue.bold(item.title));
                console.log(search);
                return item;
            }
        })
    }
    const setSearchValue = (value) => {
        setSearch(value);
    }
    return { searchProduct, setSearchValue }
}

export { useSearch, useSetSearch, useSearchAction };
export default SearchProvider;
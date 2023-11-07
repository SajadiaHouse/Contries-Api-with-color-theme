import React, { useState } from 'react'

const SearchBar = ({ search, setSearch, setRegion}) => {


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleDropdownItemClick = (e) => {
        setRegion(e.target.textContent);
        setDropdownVisible(!dropdownVisible);
    };

    const region = ["Asia", "America", "Africa", "Europe", "Oceania"];
    return (
        <>
            <div className="w-full mt-8 flex">
                <div class="relative ml-10">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        id="search"
                        class="block w-[300px] shadow-xl p-2.5 rounded-sm pl-10 text-sm text-gray-900  dark:bg-gray-700   dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search for a country"
                    />
                </div>
                <div className="ml-auto shadow-xl relative mr-10">
                    <button
                        id="dropdownDefaultButton"
                        onClick={handleDropdownToggle}
                        className="text-black font-normal dark:bg-gray-700 dark:text-slate-300 rounded text-sm px-5 p-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Filter By Region
                        <svg
                            class="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {dropdownVisible && (
                        <div
                            id="dropdown"
                            className="z-10 absolute bg-white divide-y divide-gray-100 rounded mt-1 shadow w-44 dark:bg-gray-700"
                        >
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                {region.map((e) => (
                                    <li onClick={handleDropdownItemClick}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
                                    >
                                        {e}

                                    </li>
                                ))}


                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchBar
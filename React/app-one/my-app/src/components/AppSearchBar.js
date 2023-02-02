import React, { useState } from 'react';
import Images from './Images';
import SearchBar from './SearchBar';
import ImagesContext from '../context/image-context';

export const AppSearchBar = () => {
    const [links, setLinks] = useState([]);
    const value = { links, setLinks }

    return (
        <ImagesContext.Provider value={value}>
            <SearchBar />
            <Images />
        </ImagesContext.Provider>
    );
};

export default AppSearchBar;
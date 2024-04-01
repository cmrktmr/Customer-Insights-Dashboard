import React, { createContext, useContext } from 'react';
import { useFetchData } from '../hooks/useFetchData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    //TODO: .env 
    const url = 'https://api.mockfly.dev/mocks/96f30e7d-95f9-402e-bb70-58f052cce6f7/data';
    const { data, loading, error } = useFetchData(url);

    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);

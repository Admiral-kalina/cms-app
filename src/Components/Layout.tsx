import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {fetchTabs} from "../features/tabsSlice";
import {AppDispatch, RootState} from "../app/store";

import Routing from "../routes";


const Layout = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {isLoading, error} = useSelector((state: RootState) => state.tabs);

    useEffect(() => {
        dispatch(fetchTabs())
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading tabs...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <Routing/>
};

export default Layout;
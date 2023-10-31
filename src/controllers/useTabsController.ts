import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../app/store";
import {fetchTabs} from "../features/tabsSlice";

export const useTabsController = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {tabsList, isLoading, error} = useSelector((state: RootState) => state.tabs);

    useEffect(() => {
        dispatch(fetchTabs())
    }, [dispatch]);

    return {tabsList,isLoading, error}
}


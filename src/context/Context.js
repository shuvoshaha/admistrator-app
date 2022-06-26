import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer';
import { DownloadData } from '../data/download.data';
import { DOWNLOAD_DATA_ADD } from './actions';


// checking data is exists in local storage
const downLoadDataLocal = JSON.stringify(localStorage.getItem("download_data"));
const userDataInLocal = JSON.stringify(localStorage.getItem("user_data"));


// state initial
const initialState = {
    loading: false,
    userType: 'visitor',
    userData: userDataInLocal ? userDataInLocal : [],
    downLoadData: DownloadData ? DownloadData :  userDataInLocal
}


// create context
export const ContextProvider = createContext(initialState)

const Context = ({ children }) => {


    // reducer initial
    const [state, dispatch] = useReducer(Reducer, initialState)


    // localStorage update when state will update
    useEffect(() => {

        // dispatch({ type: DOWNLOAD_DATA_ADD, payload: DownloadData })

        localStorage.setItem('download_data', JSON.stringify(state.downLoadData));
        localStorage.setItem('user_data', JSON.stringify(state.userData));


        return () => dispatch({})

    }, [state])



    return (
        <ContextProvider.Provider value={{ state, dispatch }} >
            {children}
        </ContextProvider.Provider>
    )
}

export default Context
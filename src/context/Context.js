import { createContext, useState, useEffect, useReducer } from 'react'
import Reducer from './Reducer'

// checking data is exists in local storage
const visitorDataInLocal = localStorage.getItem("download_data")
const userDataInLocal = localStorage.getItem("user_data")


// state management
const initialState = {
    loading: false,
    userType: 'visitor',
    adminData: userDataInLocal ? userDataInLocal : [],
    visitorData: visitorDataInLocal ? visitorDataInLocal : []
}


// create context
export const ContextProvider = createContext(initialState)

const Context = ({ children }) => {

    // reducer initial
    const [state, dispatch] = useReducer(Reducer, initialState)

    // state update
    useEffect(() => {
        localStorage
    }, [])

    return (
        <ContextProvider.Provider value={{ state, dispatch }} >
            {children}
        </ContextProvider.Provider>
    )
}

export default Context
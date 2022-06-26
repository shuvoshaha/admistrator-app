import { DOWNLOAD_DATA_ADD, USER_DATA_ADD, USER_DATA_EDIT, USER_DATA_DELETE, DOWNLOAD_DATA_DELETE, USERTYPE } from "./actions"


const Reducer = (state, action) => {

    switch (action.type) {

        case DOWNLOAD_DATA_ADD:
            return { ...state, downLoadData: action.payload }

        case USERTYPE: 
            return { ...state, userType: action.payload }


        default:
            return state
    }
}

export default Reducer
import { USERS_ERROR, USERS_LOADING, USERS_SUCCESS } from '../../constants'
import { UsersListType } from '../../../interfaces'

interface initialStateInterface {
    users: []
    hasError: boolean,
    isLoading: boolean,
}

const initialState: initialStateInterface = {
    users: [],
    hasError: false,
    isLoading: true,
};

interface PayloadsProps {
    type: string,
    users: UsersListType | [],
    isLoading: boolean,
    hasError: boolean
}

export function Users(state = initialState, { type, users, isLoading, hasError }: PayloadsProps) {
    switch (type) {
        case USERS_SUCCESS:
            return { ...state, users };
        case USERS_LOADING:
            return { ...state, isLoading };
        case USERS_ERROR:
            return { ...state, hasError };
        default:
            return state;
    }
}
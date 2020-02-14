import { call, put, takeEvery, all } from 'redux-saga/effects'

import { JSONplaceholder } from '../../../services/JSONplaceholder'
import { USERS_ERROR, USERS_LOADING, USERS_SUCCESS, GET_USERS } from '../../constants'
import { UsersListType } from '../../../interfaces/index'


const service = new JSONplaceholder();

const UsersError = (hasError: boolean) => ({ type: USERS_ERROR, hasError });
const UsersLoading = (isLoading: boolean) => ({ type: USERS_LOADING, isLoading });
const UsersSucess = (users: UsersListType) => ({ type: USERS_SUCCESS, users });

export const getUsersAsync = () => ({ type: GET_USERS });

function* watchGetUsers() {
    yield takeEvery(GET_USERS, sagaGetUsers);
}


function* sagaGetUsers() {
    try {
        yield put(UsersLoading(true));
        const data = yield call(() => service.getUsers());
        yield put(UsersSucess(data));
        yield put(UsersLoading(false));
    } catch (error) {
        yield put(UsersError(true));
    }
}

export function* rootSaga() {
    yield all([
        watchGetUsers()
    ])
}
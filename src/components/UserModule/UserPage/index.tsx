import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { UserList } from '../UsersList'
import { UsersState } from '../../../interfaces'
import { getUsersAsync } from '../../../redux/actions/Users'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />;
const LoadingPage = <Spin indicator={antIcon} />;


const ErrorPage = <div>Error</div>;

export const UserPage = () => {
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getUsersAsync()) }, [dispatch, getUsersAsync])

    const users = useSelector((state: UsersState) => state.Users.users);
    const loadingUsers = useSelector((state: UsersState) => state.Users.isLoading);
    const errorUsers = useSelector((state: UsersState) => state.Users.hasError);

    const View =
        <div>
            {users.length ? <UserList users={users} /> : <div>Users didn't find</div>}
        </div>


    console.log(loadingUsers);


    return errorUsers
        ?
        ErrorPage
        :
        <>
            {loadingUsers ? LoadingPage : View}
        </>
} 

import React from 'react'

import { User } from '../User'
import { UsersListType } from '../../../interfaces'

interface UsersListInterface {
    users: UsersListType
}
export const UserList: React.FC<UsersListInterface> = ({ users }) => (
    (users.length === 0)
        ?
        <div>Users didn't find</div>
        :
        <div>
            {users.map(item => User(item))}
        </div>
)



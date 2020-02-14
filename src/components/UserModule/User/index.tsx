import React from 'react'
import { Card } from 'antd';

interface UserProps {
    id: number,
    name: string,
    email: string
}

export const User: React.FC<UserProps> = ({ id, name, email }) => (
    <div key={id} style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title={name} bordered={false} style={{ width: 300 }}>
            <p>{email}</p>
        </Card>
    </div>
)


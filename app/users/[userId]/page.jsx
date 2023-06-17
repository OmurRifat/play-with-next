import React from 'react'
import getUser from '../../../lib/getUser';
import { notFound } from 'next/navigation';
import getUsers from '@/lib/getUsers';

export default async function UserPage({ params: { userId } }) {
    const user = await getUser(userId);

    if (!user?.name) return notFound();

    return (
        <div>
            <h1>{ user?.name }</h1>
        </div>
    )
}

export async function generateStaticParams() {
    const users = await getUsers();
    return users?.map((user) => {
        userId: user.id;
    })
}

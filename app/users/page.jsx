import React from 'react'
import getUsers from '../../lib/getUsers'
import Link from 'next/link';

export default async function Users() {
  const users = await getUsers();
  return (
    <>
      <Link href='/' >Home</Link>
      {
        users?.map((user) => {
          return (
            <div key={ user.id }>
              <Link href={ `/users/${user.id}` }>{ user.name }</Link>
            </div>
          )
        })
      }
    </>
  )
}
